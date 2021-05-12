import { ChallengeContext } from '@contexts/ChallengesContexts';
import { useContext } from 'react';

import { Container } from './styles';

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengeContext);

  return (
    <Container>
      <span>Completed Challenges</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
}
