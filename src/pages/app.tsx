import App from '@views/App';
import { AppProps } from '@views/App/app.types';
import { GetServerSideProps } from 'next';

const AppPage = (props: AppProps) => <App {...props} />;

export default AppPage;

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
