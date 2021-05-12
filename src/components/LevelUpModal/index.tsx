// eslint-disable-next-line import/no-cycle
import { ChallengeContext } from '@contexts/ChallengesContexts';
import { useContext } from 'react';
import { MdClose } from 'react-icons/md';

import { Container, Overlay } from './styles';

export default function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);
  return (
    <Overlay>
      <Container>
        <header>{level}</header>
        <strong>Congratulations</strong>
        <p>You achieved a new level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <MdClose size={25} role="img" />
        </button>
      </Container>
    </Overlay>
  );
}
