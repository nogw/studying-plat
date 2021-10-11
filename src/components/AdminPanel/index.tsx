import { Container, Column } from './styles';
import AdminListChallenges from '../AdminListChallenges'
import CreateChallenge from '../CreateChallenge';
import ChallengesToApprove from '../ChallengesToApprove';

function AdminPanel({ challenges }) {
  return (
    <Container>
      <AdminListChallenges challenges={challenges}/>
      <Column>
        <CreateChallenge/>
        <ChallengesToApprove/>
      </Column>
    </Container>
  );
};

export default AdminPanel;
