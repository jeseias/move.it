import { render, screen } from '@test-utils';

import ChallengeBox from '.';

const makeSut = () => render(<ChallengeBox />);

describe(`${ChallengeBox.name} Component`, () => {
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

  it.todo('should render as expected, with an active challenge');
});
