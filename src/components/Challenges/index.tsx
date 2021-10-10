import ChallengeItemList from '../ChallengeItemList';
import { Empty } from '../CompletedChallenges/styles';
import { ChallengesContainer, ChallengesList, Container } from './styles';

function Challenges({ challenges }) {
  return (
    <Container>
      <ChallengesContainer>
        {
          challenges.length > 0 ? (
            <>
              <h1>dificuldade facil</h1>
              <ChallengesList>
                {
                  challenges?.map((c, i) => {
                    return (
                      <ChallengeItemList
                        key={i}
                        name={c.title}
                        desc={c.description}
                        id={c._id}
                      />
                    )
                  })
                }
              </ChallengesList>
            </>
          ) : (
            <Empty>
              <h1>Nenhum desafio disponivel no momento</h1>
            </Empty>
          )
        }
      </ChallengesContainer>
    </Container>
  );
};

export default Challenges;
