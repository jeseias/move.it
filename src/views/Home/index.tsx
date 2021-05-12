import axios from 'axios';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MdInput } from 'react-icons/md';

import { ICurrentUser } from './home.types';
import { Container } from './styles';

export default function Home() {
  const [userName, setUserName] = useState('');
  const router = useRouter();

  async function loginUser() {
    try {
      const response = await axios(`https://api.github.com/users/${userName}`);
      const { data } = response;

      const { login, name } = data;

      const currentUser: ICurrentUser = { login, name };

      Cookies.set('currentUser', JSON.stringify(currentUser));
      router.push('/app');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Head>
        <title>Inicio | login</title>
      </Head>
      <main>
        <h2>Welcome to move.it</h2>
        <div className="input">
          <input
            type="text"
            placeholder="GITHUB USER NAME"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <button type="button" onClick={loginUser}>
            <MdInput size={30} />
          </button>
        </div>
        <p>Develop by JESEIAS</p>
      </main>
    </Container>
  );
}
