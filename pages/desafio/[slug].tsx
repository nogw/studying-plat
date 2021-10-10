import Layout from '../../src/components/Layout'
import Challenge from '../../src/components/Challenge'
import { api } from '../../src/utils/api';
import { GetServerSideProps } from 'next';

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
  const { slug } = ctx.query
  const response: any = await api.get(`/challenge/admin/get/${slug}`)
  const responseSolution: any = await api.get(`/challenge/user/challenge/6160e47eef372319884f034c/${slug}`)

  if (!response) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      challenge: response.data.message,
      solution: responseSolution.data.message
    }
  }
}