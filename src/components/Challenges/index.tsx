import ChallengeItemList from '../ChallengeItemList';
import { ChallengesContainer, ChallengesList, Container } from './styles';

function Challenges({ challenges }) {
  return (
    <Container>
      <ChallengesContainer>
        <h1>dificuldade facil</h1>
        <ChallengesList>
          {
            challenges.map(c => {
              return (
                <ChallengeItemList
                  key={c._id}
                  name={c.title}
                  desc={c.description}
                  id={c._id}
                />
              )
            })
          }
        </ChallengesList>
      </ChallengesContainer>
    </Container>
  );
};

export default Challenges;
