import { GetServerSideProps } from 'next';
import Layout from '../src/components/Layout'
import ProgressChallenges from '../src/components/ProgressChallenges'
import { api } from '../src/utils/api';

function Progresso({ challenges }) {
  return (
    <Layout>
      <ProgressChallenges challenges={challenges}/>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response: any = await api.get(`/challenge/user/challenges/6160e47eef372319884f034c`)
  const challenges = response.data.message[0].inProgressChallenges
  console.log(challenges)

  return {
    props: { challenges }
  }
}

export default Progresso;
