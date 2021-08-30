import { isDevelopment } from '@utils';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { ChallengeContext } from './ChallengesContexts';

export interface ICountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

export interface ICountdownProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as ICountdownContextData);

const countdownTime = (isDevelopment() ? 0.05 : 25) * 60;

let countDownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: ICountdownProps) {
  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(countdownTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countDownTimeout);
    setHasFinished(false);
    setIsActive(false);
    setTime(countdownTime);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
