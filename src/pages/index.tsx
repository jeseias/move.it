import ChallengeBox from '@components/ChallengeBox';
import CompletedChallenges from '@components/CompletedChallenges';
import Countdown from '@components/Countdown';
import ExperienceBar from '@components/ExperienceBar';
import Profile from '@components/Profile';
import { ChallengesProvider } from '@contexts/ChallengesContexts';
import { CountdownProvider } from '@contexts/CountdownContext';
import styles from '@styles-pages/Home.module.css';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({ challengesCompleted, currentExperience, level }: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
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
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
