import { render, screen } from '@test-utils';

import ChallengeBox from '.';

const makeSut = () => render(<ChallengeBox />);

describe(`${ChallengeBox.name} Component`, () => {
  it('should render as expected, without a complete or active challenge', () => {
    makeSut();

    expect(screen.getByRole('button', { name: /Initialize cycle/i })).toBeInTheDocument();
  });
});
