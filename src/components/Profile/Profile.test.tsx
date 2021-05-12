import { render, screen } from '@test-utils';

import Profile from '.';

const makeSut = () => render(<Profile />);

describe(`${Profile.name} Component`, () => {
  it('should render as expected', () => {
    makeSut();

    expect(screen.getByText('Jeseias Domingos')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
