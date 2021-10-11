import { GetServerSideProps } from 'next';
import AdminPanel from '../src/components/AdminPanel';
import { api } from '../src/utils/api';

function Admin({ challenges }) {
  return (
    <AdminPanel challenges={challenges}/>
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