import { GetServerSideProps } from 'next';
import AdminPanel from '../src/components/AdminPanel';
import { api } from '../src/utils/api';

function Admin({ challenges, challengesToApprove }) {
  return (
    <AdminPanel challenges={challenges} challengesToApprove={challengesToApprove}/>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const challenges: any = await api.get("/challenge/admin/list")
  const challengesToApprove: any = await api.get("/challenge/admin/challengestoapprove")

  return {
    props: { 
      challenges: challenges.data.message,  
      challengesToApprove: challengesToApprove.data.message
    }
  }
}

export default Admin;