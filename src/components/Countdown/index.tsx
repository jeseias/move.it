import { CountdownContext } from '@contexts/CountdownContext';
import { useContext } from 'react';

import { Container, CountdownButton, CountdownButtonActive } from './styles';

export default function Countdown() {
  const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(
    CountdownContext
  );

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <CountdownButton type="button" disabled>
          Cycle complete
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButtonActive
              type="button"
              className="countdownButtonActive"
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </CountdownButtonActive>
          ) : (
            <CountdownButton type="button" onClick={startCountdown}>
              Initialize cycle
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
