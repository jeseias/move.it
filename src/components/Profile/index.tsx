import { ChallengeContext } from '@contexts/ChallengesContexts';
import { useContext } from 'react';

import { Container } from './styles';

export default function Profile() {
  const { level } = useContext(ChallengeContext);
  return (
    <Container>
      <img src="https://github.com/jeseias.png" alt="Jeseias Domingos" />
      <div>
        <strong>Jeseias Domingos</strong>
        <p>Level {level}</p>
      </div>
    </Container>
  );
}
