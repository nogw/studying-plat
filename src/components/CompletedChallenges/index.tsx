import { ChallengesContainer, ChallengesList } from '../Challenges/styles';
import { Container, ItemList, Empty } from './styles';
import Link from 'next/link'

function ChallengeItemList({ id, name, desc }) {
  return (
    <Link href={`/desafio/${id}`}>
      <ItemList>
        <div className="circle"/>
        <div className="texts">
          <h2>{name}</h2>
          <h5>{desc}</h5>
        </div>
      </ItemList>
    </Link>
  );
};

function CompletedChallenges({ challenges }) {
  return (
    <Container>
      <ChallengesContainer>
          {
            challenges ? (
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
            ) : (
              <Empty>
                <h1>Complete um desafio para preencher aqui!</h1>
              </Empty>
            )
          }
      </ChallengesContainer>
    </Container>
  );
};

export default CompletedChallenges;
