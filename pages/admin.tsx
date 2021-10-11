import { GetServerSideProps } from 'next';
import AdminListChallenges from '../src/components/AdminListChallenges'
import { api } from '../src/utils/api';

function Admin({ challenges }) {
  return (
    <AdminListChallenges challenges={challenges}/>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response: any = await api.get("/challenge/admin/list")
  const challenges = response.data.message

  return {
    props: { challenges }
  }
}

export default Admin;