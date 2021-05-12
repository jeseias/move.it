import ChallengeBox from '@components/ChallengeBox';
import CompletedChallenges from '@components/CompletedChallenges';
import Countdown from '@components/Countdown';
import ExperienceBar from '@components/ExperienceBar';
import Profile from '@components/Profile';
import { ChallengesProvider } from '@contexts/ChallengesContexts';
import { CountdownProvider } from '@contexts/CountdownContext';
import Head from 'next/head';

import { AppProps } from './app.types';
import { Container } from './styles';

export default function Home({ challengesCompleted, currentExperience, level }: AppProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <Container>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  );
}
