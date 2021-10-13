import { Container, Column } from './styles';
import AdminListChallenges from '../AdminListChallenges'
import CreateChallenge from '../CreateChallenge';
import ChallengesToApprove from '../ChallengesToApprove';
import { useState } from 'react';

function AdminPanel({ challenges, challengesToApprove }) {
  const [challengesState, setChallengesState] = useState(challenges)
  return (
    <Container>
      <AdminListChallenges challenges={challengesState}/>
      <Column>
        <CreateChallenge challengesState={challengesState} setChallenges={setChallengesState}/>
        <ChallengesToApprove challengesToApprove={challengesToApprove}/>
      </Column>
    </Container>
  );
};

export default AdminPanel;
