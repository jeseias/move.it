import { CountdownContext } from '@contexts/CountdownContext';
import { useContext } from 'react';

import { formatTime } from './countdown-helper';
import { Container, CountdownButton, CountdownButtonActive } from './styles';

export default function Countdown() {
  const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(
    CountdownContext
  );

  const [minuteLeft, minuteRight] = formatTime(minutes);
  const [secondLeft, secondRight] = formatTime(seconds);

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
              End Cycle
            </CountdownButtonActive>
          ) : (
            <CountdownButton type="button" onClick={startCountdown}>
              Initialize Cycle
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
