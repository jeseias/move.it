import { render, screen } from '@test-utils';

import LevelUpModal from '.';

const makeSut = () => render(<LevelUpModal />);

describe(`${LevelUpModal.name} Component`, () => {
  it('should render as expected', () => {
    makeSut();

    expect(screen.getByText('Congratulations')).toBeInTheDocument();
    expect(screen.getByText('You achieved a new level.')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();

    expect(screen.getByRole('img')).toHaveStyle({
      width: 25,
      height: 25,
    });
  });
});
