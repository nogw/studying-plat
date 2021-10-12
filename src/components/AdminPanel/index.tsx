import { Container, Column } from './styles';
import AdminListChallenges from '../AdminListChallenges'
import CreateChallenge from '../CreateChallenge';
import ChallengesToApprove from '../ChallengesToApprove';

function AdminPanel({ challenges, challengesToApprove }) {
  return (
    <Container>
      <AdminListChallenges challenges={challenges}/>
      <Column>
        <CreateChallenge/>
        <ChallengesToApprove challengesToApprove={challengesToApprove}/>
      </Column>
    </Container>
  );
};

export default AdminPanel;
