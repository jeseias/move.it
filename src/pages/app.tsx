import App from '@views/App';
import { AppProps } from '@views/App/app.types';
import { GetServerSideProps } from 'next';

const AppPage = (props: AppProps) => <App {...props} />;

export default AppPage;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted, currentUser } = ctx.req.cookies;

  return {
    props: {
      level: currentUser ? Number(level) : 0,
      currentExperience: currentUser ? Number(currentExperience) : 0,
      challengesCompleted: currentUser ? Number(challengesCompleted) : 0,
    },
  };
};
