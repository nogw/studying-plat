import { GetServerSideProps } from 'next';
import Layout from '../src/components/Layout'
import ProgressChallenges from '../src/components/ProgressChallenges'
import { api } from '../src/utils/api';
import nookies from 'nookies'
import jwt from 'jsonwebtoken'

function Progresso({ challenges }) {
  return (
    <Layout>
      <ProgressChallenges challenges={challenges}/>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "py.plat.user.id": cookies }  = nookies.get(ctx)
  const decode: any = jwt.decode(cookies)
  const response: any = await api.get(`/challenge/user/challenges/${decode.id}`)
  const challenges = response.data.message[0].inProgressChallenges
  console.log(challenges)

  return {
    props: { challenges }
  }
}

export default Progresso;
