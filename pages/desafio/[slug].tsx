import Layout from '../../src/components/Layout'
import Challenge from '../../src/components/Challenge'
import { api } from '../../src/utils/api';
import { GetServerSideProps } from 'next';
import nookies from 'nookies'
import jwt from 'jsonwebtoken'

export default function SlugTsx({ challenge, solution }: { challenge: any, solution?: any }) {
  return (
    <>
      <Layout>
        <Challenge solution={solution} id={challenge._id} markdown={ challenge.challenge }/>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ( ctx ) => {
  const { "py.plat.user.id": cookies }  = nookies.get(ctx)
  const decode: any = jwt.decode(cookies)
  const { slug } = ctx.query
  const response: any = await api.get(`/challenge/admin/get/${slug}`)
  const responseSolution: any = await api.get(`/challenge/user/challenge/${decode.id}/${slug}`)

  if (!cookies) {
    return {
      redirect: {
        destination: "/connect",
        permanent: false
      }
    }
  }

  return {
    props: {
      challenge: response.data.message,
      solution: responseSolution.data.message
    }
  }
}