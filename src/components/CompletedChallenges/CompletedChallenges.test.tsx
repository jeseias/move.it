import { render, screen } from '@test-utils';

import ChallengeBox from '.';

const challengesCompleted = 5;

const makeSut = () =>
  render(<ChallengeBox />, {
    contextStates: {
      ChallengeState: {
        challengesCompleted,
      } as any,
    } as any,
  });

describe(`${ChallengeBox.name} Component`, () => {
  it('should render as expected', () => {
    makeSut();

    expect(screen.getByText('Completed Challenges')).toBeInTheDocument();
    expect(screen.getByText(challengesCompleted)).toBeInTheDocument();
  });
});
