import { render, screen } from '@test-utils';

import ChallengeBox from '..';
import { formatTime } from '../countdown-helper';

const minutes = 20;
const seconds = 14;
const resetCountdown = jest.fn();
const startCountdown = jest.fn();

const makeSut = ({ hasFinished, isActive }: { hasFinished?: boolean; isActive?: boolean }) =>
  render(<ChallengeBox />, {
    contextStates: {
      CountdownState: {
        minutes,
        seconds,
        resetCountdown,
        startCountdown,
        hasFinished,
        isActive,
      } as any,
    } as any,
  });

describe(`${ChallengeBox.name} Component`, () => {
  it('should correctly display the countdown time values', () => {
    makeSut({});

    expect(screen.getByText(formatTime(minutes)[0])).toBeInTheDocument();
    expect(screen.getByText(formatTime(minutes)[1])).toBeInTheDocument();
    expect(screen.getByText(formatTime(seconds)[0])).toBeInTheDocument();
    expect(screen.getByText(formatTime(seconds)[1])).toBeInTheDocument();
  });

  it('should display cycle complete and not display active challenge information', () => {
    makeSut({ hasFinished: true, isActive: false });

    expect(screen.getByText('Cycle complete')).toBeInTheDocument();

    expect(screen.queryByText('End Cycle')).not.toBeInTheDocument();
    expect(screen.queryByText('Initialize Cycle')).not.toBeInTheDocument();
  });

  it('should only display "End Cycle" and not display complete challenge information', () => {
    makeSut({ hasFinished: false, isActive: true });

    expect(screen.queryByText('Cycle complete')).not.toBeInTheDocument();

    expect(screen.getByText('End Cycle')).toBeInTheDocument();
    expect(screen.queryByText('Initialize Cycle')).not.toBeInTheDocument();
  });

  it('should only display "Initialize Cycle" and not display complete challenge information', () => {
    makeSut({ hasFinished: false, isActive: false });

    expect(screen.queryByText('Cycle complete')).not.toBeInTheDocument();

    expect(screen.queryByText('End Cycle')).not.toBeInTheDocument();
    expect(screen.getByText('Initialize Cycle')).toBeInTheDocument();
  });
});
