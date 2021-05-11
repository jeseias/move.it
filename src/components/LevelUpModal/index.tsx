// eslint-disable-next-line import/no-cycle
import { ChallengeContext } from '@contexts/ChallengesContexts';
import { useContext } from 'react';
import { MdClose } from 'react-icons/md';

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
          <MdClose size={25} />
        </button>
      </Container>
    </Overlay>
  );
}
