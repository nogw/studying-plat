import { ContainerC, Item } from './styles';
import Link from 'next/link'
import { api } from '../../utils/api';
import NProgress from 'nprogress'; 
import { useRouter } from 'next/router'

function ChallengeItemList({ id, name, desc }) {
  const Router = useRouter()
  const handleStartChallenge = async () => {
    try {
      NProgress.start();
      await api.post(`/challenge/user/start`, {
        userId: "6160e47eef372319884f034c",
        challengeId: id,
      })
      NProgress.done();
      Router.push(`/desafio/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Item>
      <Link href={`/desafio/${id}`}>
        <ContainerC>
          <div className="circle"/>
          <div className="texts">
            <h2>{name}</h2>
            <h5>{desc}</h5>
          </div>
        </ContainerC>
      </Link>
      <div className="leave" onClick={handleStartChallenge}>START</div>
    </Item>
  );
};

export default ChallengeItemList;
