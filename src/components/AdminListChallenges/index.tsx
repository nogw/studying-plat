import { Item } from '../ChallengeItemList/styles';
import { ItemList } from '../CompletedChallenges/styles';
import { Container } from './styles';
import Link from 'next/link'

function ChallengeItemList({ idChallenge, name, desc }) {
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
      {/* <button className="leave" onClick={handleStartChallenge}>LEAVE</button> */}
    </Item>
  );
};


function Admin({ challenges }) {
  return (
    <Container>
      {
        challenges.map(v => {
          return <ChallengeItemList idChallenge={v._id} name={v.title} desc={v.description}/>
        })
      }
    </Container>
  );
};

export default Admin;
