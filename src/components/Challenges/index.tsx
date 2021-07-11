import ChallengeItemList from '../ChallengeItemList';
import { ChallengesContainer, ChallengesList, Container } from './styles';

function Challenges() {
  return (
    <Container>
      <ChallengesContainer>
        <h1>dificuldade facil</h1>
        <ChallengesList>
          <ChallengeItemList
            name="Python API"
            desc="use any library to..."
            start={true}
            id={1}
          />
          <ChallengeItemList
            name="Python API"
            desc="use any library to..."
            start={false}
            id={1}
          />
        </ChallengesList>
      </ChallengesContainer>
    </Container>
  );
};

export default Challenges;
