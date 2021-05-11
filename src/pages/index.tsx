import Home from '@views/Home';
import { GetServerSideProps } from 'next';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default (props: HomeProps) => <Home {...props} />;

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
