import { render, screen } from '@test-utils';

import Home from '.';

const makeSut = () => render(<Home />);

describe(`${Home.name} Component`, () => {
  it('should render as expected', () => {
    makeSut();

    expect(screen.getByText('Welcome to move.it')).toBeInTheDocument();
    expect(screen.getByText('Develop by JESEIAS')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('GITHUB USER NAME')).toBeInTheDocument();
  });
});
