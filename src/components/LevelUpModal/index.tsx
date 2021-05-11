// eslint-disable-next-line import/no-cycle
import { ChallengeContext } from '@contexts/ChallengesContexts';
import { useContext } from 'react';

import { Container, Overlay } from './styles';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);
  return (
    <Overlay>
      <Container>
        <header>{level}</header>
        <strong>Parabens</strong>
        <p>Voce alcancou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="close icon" />
        </button>
      </Container>
    </Overlay>
  );
}
