import { ChallengeContext } from '@contexts/ChallengesContexts';
import { ICurrentUser } from '@views/Home/home.types';
import Cookies from 'js-cookie';
import { useContext } from 'react';

import { Container } from './styles';

export default function Profile() {
  const { level } = useContext(ChallengeContext);
  const currentUser: ICurrentUser = JSON.parse(Cookies.get('currentUser'));

  return (
    <Container>
      <img src={`https://github.com/${currentUser.login}.png`} alt={currentUser.name} />
      <div>
        <strong>{currentUser.name}</strong>
        <p>Level {level}</p>
      </div>
    </Container>
  );
}
