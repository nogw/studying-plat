import Layout from '../../src/components/Layout'
import Challenge from '../../src/components/Challenge'
import { api } from '../../src/utils/api';
import { GetServerSideProps } from 'next';

export default function SlugTsx({ challenges }) {
  return (
    <>
      <Layout>
        <Challenge id={challenges[0]._id} markdown={ challenges[0].challenge }/>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response: any = await api.get("/challenge/admin/list")
  const challenges = response.data.message

  return {
    props: { challenges }
  }
}