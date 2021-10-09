import { ChallengesContainer, ChallengesList } from '../Challenges/styles';
import { Container, ItemList, Empty } from './styles';
import Link from 'next/link'
import { api } from '../../utils/api';
import NProgress from 'nprogress'; 
// import { useRouter } from 'next/router'

function ChallengeItemList({ id, name, desc }) {
  // const Router = useRouter()
  const handleStartChallenge = async () => {
    NProgress.start();
    // const response: any = await api.post(`/challenge/user/start`, {
    //   userId: "6160566cde2d7525a08dcd79",
    //   challengeId: id,
    // })

    // if (response.status == "200") {
    //   NProgress.done();
    //   Router.push(`/desafio/${id}`)
    // }
  }

  return (
    // <Link href={`/desafio/${id}`}>
      <ItemList>
        <div className="circle"/>
        <div className="texts">
          <h2>{name}</h2>
          <h5>{desc}</h5>
        </div>
        <div className="leave" onClick={handleStartChallenge}>
          LEAVE
        </div>
      </ItemList>
    // </Link>
  );
};

function CompletedChallenges({ challenges }) {
  return (
    <Container>
      <ChallengesContainer>
          {
            challenges.completedChallenges ? (
              <ChallengesList>
                {
                  challenges.inProgressChallenges.map(c => {
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
