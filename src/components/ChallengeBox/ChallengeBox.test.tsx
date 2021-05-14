import { IChallenge } from '@contexts/ChallengesContexts';
import { render, screen, userEvent } from '@test-utils';

import ChallengeBox from '.';

const activeChallenge: IChallenge = {
  amount: 50,
  description: 'This is an active challenge description',
  type: 'body',
};

const resetChallenge = jest.fn();
const completeChallenge = jest.fn();
const resetCountdown = jest.fn();

const makeSut = (isChallenge?: boolean) =>
  render(<ChallengeBox />, {
    contextStates: {
      ChallengeState: {
        activeChallenge: isChallenge ? activeChallenge : null,
        resetChallenge,
        completeChallenge,
      } as any,
      CountdownState: {
        resetCountdown,
      } as any,
    },
  });

describe(`${ChallengeBox.name} Component`, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render as expected, without an active challenge', () => {
    makeSut();

    expect(screen.getByText('Finalize a cycle to receive a challenge')).toBeInTheDocument();
    expect(screen.getByText('Go up a level by completing challenges')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();

    expect(screen.getByRole('img')).toHaveStyle({
      height: 50,
      width: 10,
    });
  });

  it('should render as expected, with an active challenge', () => {
    makeSut(true);

    expect(screen.getByText(`Win ${activeChallenge.amount} xp`)).toBeInTheDocument();
    expect(screen.getByLabelText('body gym image')).toBeInTheDocument();
    expect(screen.getByText('New Challenge')).toBeInTheDocument();
    expect(screen.getByText(activeChallenge.description)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Completed/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Failed/i })).toBeInTheDocument();
  });

  it('should handle as a succeeded cycle when completed button is clicked', () => {
    makeSut(true);

    userEvent.click(screen.getByRole('button', { name: /Completed/i }));

    expect(completeChallenge).toHaveBeenCalledTimes(1);
    expect(resetCountdown).toHaveBeenCalledTimes(1);
  });

  it('should handle as a failed cycle when failed button is clicked', () => {
    makeSut(true);

    userEvent.click(screen.getByRole('button', { name: /Failed/i }));

    expect(resetChallenge).toHaveBeenCalledTimes(1);
    expect(resetCountdown).toHaveBeenCalledTimes(1);
  });
});
