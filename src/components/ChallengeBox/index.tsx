import { ChallengeContext } from '@contexts/ChallengesContexts';
import { CountdownContext } from '@contexts/CountdownContext';
import { useContext } from 'react';
import { CgGym } from 'react-icons/cg';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { ImEye } from 'react-icons/im';

import { ChallengeActive, ChallengeNotActive, Container } from './styles';

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleFunctionSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleFunctionFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Win {activeChallenge.amount} xp</header>
          <main>
            {activeChallenge.type === 'body' && <CgGym size={60} />}
            {activeChallenge.type === 'eye' && <ImEye size={60} />}
            <strong>New Challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button className="challengeFailedButton" type="button" onClick={handleFunctionFailed}>
              Failed
            </button>
            <button
              className="challengeSucceededButton"
              type="button"
              onClick={handleFunctionSucceeded}
            >
              Completed
            </button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize a cycle to receive a challenge</strong>
          <p>
            <FaArrowAltCircleUp size={50} role="img" />
            Go up a level by completing challenges
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
}
