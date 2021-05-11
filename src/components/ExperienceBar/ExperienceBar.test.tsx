import { render } from '@test-utils';

import ExperienceBar from '.';

const makeSut = () => render(<ExperienceBar />);

describe(`${ExperienceBar.name} Component`, () => {
  it('should render as expected', () => {
    makeSut();
  });
});
