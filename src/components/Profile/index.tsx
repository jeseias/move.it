import { ChallengeContext } from '@contexts/ChallengesContexts';
import { getLoggedUser } from '@utils';
import { ICurrentUser } from '@views/Home/home.types';
import { useContext, useEffect, useState } from 'react';

import { Container } from './styles';

export default function Profile() {
  const { level } = useContext(ChallengeContext);
  const [user, setUser] = useState<ICurrentUser>({} as ICurrentUser);

  useEffect(() => {
    const currentUser = getLoggedUser();
    setUser(currentUser);

    console.log('The current user is', user);
  }, []);

  return (
    <Container>
      <img
        src={`https://github.com/${(user && user.login) || null}.png`}
        alt={(user && user.name) || 'No user found'}
      />
      <div>
        <strong>{(user && user.name) || 'No User Found'}</strong>
        <p>Level {level}</p>
      </div>
    </Container>
  );
}
