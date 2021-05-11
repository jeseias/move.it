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
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            {activeChallenge.type === 'body' && <CgGym size={60} />}
            {activeChallenge.type === 'eye' && <ImEye size={60} />}
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button className="challengeFailedButton" type="button" onClick={handleFunctionFailed}>
              Falhei
            </button>
            <button
              className="challengeSucceededButton"
              type="button"
              onClick={handleFunctionSucceeded}
            >
              Completei
            </button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <FaArrowAltCircleUp size={50} />
            Avance de level completando desafios
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
}
