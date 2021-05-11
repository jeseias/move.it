import { ChallengeContext } from '@contexts/ChallengesContexts';
import { useContext } from 'react';

import { Container, CurrentExperience } from './styles';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <CurrentExperience style={{ left: '50%' }}>{currentExperience} xp</CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
}
