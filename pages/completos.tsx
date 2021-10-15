import { GetServerSideProps } from 'next';
import Layout from '../src/components/Layout'
import CompletedChallenges from '../src/components/CompletedChallenges'
import { api } from '../src/utils/api';
import nookies from 'nookies'
import jwt from 'jsonwebtoken'

function Completos({ challenges }) {
  return (
    <Layout>
      <CompletedChallenges challenges={challenges}/>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "py.plat.user.id": cookies }  = nookies.get(ctx)
  const decode: any = jwt.decode(cookies)
  const response: any = await api.get(`/challenge/user/challenges/${decode.id}`)
  const challenges = response.data.message[0].completedChallenges
  console.log(challenges)

  return {
    props: { challenges }
  }
}

export default Completos;
