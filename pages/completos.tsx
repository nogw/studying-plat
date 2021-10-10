import { GetServerSideProps } from 'next';
import Layout from '../src/components/Layout'
import CompletedChallenges from '../src/components/CompletedChallenges'
import { api } from '../src/utils/api';

function Completos({ challenges }) {
  return (
    <Layout>
      <CompletedChallenges challenges={challenges}/>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response: any = await api.get(`/challenge/user/challenges/6160e47eef372319884f034c`)
  const challenges = response.data.message[0].completedChallenges
  console.log(challenges)

  return {
    props: { challenges }
  }
}

export default Completos;
