// eslint-disable-next-line import/no-cycle
import LevelUpModal from '@components/LevelUpModal';
import { getLoggedUser, isUserLogged } from '@utils';
import Cookies from 'js-cookie';
import { createContext, ReactNode, useEffect, useState } from 'react';

import challenges from '../../challenges.json';

export interface IChallenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

export interface IChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: IChallenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

export interface IChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface IUserData {
  name: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengeContext = createContext<IChallengesContextData>({} as IChallengesContextData);

export function ChallengesProvider({ children, ...rest }: IChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const experienceToNextLevel = ((level + 1) * 4) ** 2; // Math.pow

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    if (isUserLogged()) {
      const user = getLoggedUser();
      const thisUserData: IUserData = {
        name: user.login,
        level,
        currentExperience,
        challengesCompleted,
      };

      const allUserData = JSON.parse(Cookies.get('move.it.DB')) as IUserData[];

      const newAllUserData = allUserData.map(item => {
        if (item.name === thisUserData.name) {
          item = thisUserData;
        }

        return item;
      });

      Cookies.set('move.it.DB', JSON.stringify(newAllUserData));
    }
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      // eslint-disable-next-line no-new
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      // eslint-disable-next-line no-useless-return
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setChallengesCompleted(challengesCompleted + 1);
    setActiveChallenge(null);
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  );
}
