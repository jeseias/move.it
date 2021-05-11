import { ChallengeContext } from '@contexts/ChallengesContexts';
import { CountdownContext } from '@contexts/CountdownContext';
import { useContext } from 'react';

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
            <img src="" alt="gym" />
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
          <strong>Finalize um ciclu para receber um desafio</strong>
          <p>
            <img src="" alt="level up" />
            Avance de level completando desafios
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
}
