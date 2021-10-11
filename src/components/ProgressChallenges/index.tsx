import { ChallengesContainer, ChallengesList } from '../Challenges/styles';
import { Container, Item, ItemList } from './styles';
import {  } from './styles';
import Link from 'next/link'
import { api } from '../../utils/api';
import NProgress from 'nprogress'; 
import { Empty } from '../CompletedChallenges/styles';
import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router'

function ChallengeItemList({ idChallenge, id, name, desc, challengesList, setChallengesList }) {
  // const Router = useRouter()

  const removeFromState = () => {
    const array = [...challengesList]
    const index = array.findIndex( (x: any) => x._id === id);
    array.splice(index, 1);
    setChallengesList(array)
  }

  const handleStartChallenge = async () => {
    NProgress.start();
    console.log(`challengeid - ${idChallenge}`)
    console.log(`_id - ${id}`)

    try {      
      const response: any = await api.post(`/challenge/user/leave`, {
        userId: "6160e47eef372319884f034c",
        challengeId: id,
      })
      NProgress.done();
      removeFromState()
      console.log(response)
    } catch (error) {
      NProgress.done();
      console.log(error)
    }
  }

  return (
    <Item>
      <Link href={`/desafio/${idChallenge}`}>
        <ItemList>
          <div className="circle"/>
          <div className="texts">
            <h2>{name}</h2>
            <h5>{desc}</h5>
          </div>
        </ItemList>
      </Link>
      <button className="leave" onClick={handleStartChallenge}>LEAVE</button>
    </Item>
  );
};

function ProgressChallenges({ challenges }) {
  const [challengesList, setChallengesList] = useState(challenges)
  useEffect(() => {
    console.log(challengesList)
  }, [])

  return (
    <Container>
      <ChallengesContainer>
        {
          challengesList.length > 0 ? (
            <ChallengesList className="challenges">
              {
                challengesList.map(c => {
                  return (
                    <ChallengeItemList
                      key={c._id}
                      id={c._id}
                      name={c.title}
                      desc={c.description}
                      idChallenge={c.idChallenge}
                      setChallengesList={setChallengesList}
                      challengesList={challengesList}
                    />
                  )
                })
              }
            </ChallengesList>
          ) : (
            <Empty>
              <h1>Comece um desafio para preencher aqui!</h1>
            </Empty>
          )
        }
      </ChallengesContainer>
    </Container>
  );
};

export default ProgressChallenges;
