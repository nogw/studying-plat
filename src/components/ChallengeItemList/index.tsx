import { ContainerC } from './styles';
import Link from 'next/link'

function ChallengeItemList({ id, name, desc, start }) {
  return (
    <Link href={`/desafio/${id}`}>
    <ContainerC start={start}>
      <div className="circle"/>
      <div className="texts">
        <h2>{name}</h2>
        <h5>{desc}</h5>
      </div>
      <Link href={`/`}>
        <div className="leave">
          {start ? "LEAVE" : "START"}
        </div>
      </Link>
    </ContainerC>
    </Link>
  );
};

export default ChallengeItemList;
