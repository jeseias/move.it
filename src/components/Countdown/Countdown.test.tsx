import { render } from '@test-utils';

import ChallengeBox from '.';

const makeSut = () => render(<ChallengeBox />);

describe(`${ChallengeBox.name} Component`, () => {
  it('should render as expected', () => {
    makeSut();
  });
});
