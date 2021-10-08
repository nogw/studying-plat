import Layout from '../../src/components/Layout'
import Challenge from '../../src/components/Challenge'
import { api } from '../../src/utils/api';
import { GetServerSideProps } from 'next';

export default function SlugTsx({ challenges }) {
  return (
    <>
      <Layout>
        <Challenge id={challenges._id} markdown={ challenges.challenge }/>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ( ctx ) => {
  const { slug } = ctx.query
  const response: any = await api.get(`/challenge/admin/get/${slug}`)
  const challenges = response.data.message

  return {
    props: { challenges }
  }
}