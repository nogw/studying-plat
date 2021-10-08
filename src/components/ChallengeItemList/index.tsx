import { ContainerC } from './styles';
import Link from 'next/link'

function ChallengeItemList({ id, name, desc }) {
  return (
    <Link href={`/desafio/${id}`}>
    <ContainerC>
      <div className="circle"/>
      <div className="texts">
        <h2>{name}</h2>
        <h5>{desc}</h5>
      </div>
      <Link href={`/`}>
        <div className="leave">
          START
        </div>
      </Link>
    </ContainerC>
    </Link>
  );
};

export default ChallengeItemList;
