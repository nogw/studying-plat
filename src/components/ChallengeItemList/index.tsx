import { ContainerC } from './styles';
import Link from 'next/link'
import { api } from '../../utils/api';
import NProgress from 'nprogress'; 
import { useRouter } from 'next/router'

function ChallengeItemList({ id, name, desc }) {
  const Router = useRouter()
  const handleStartChallenge = async () => {
    NProgress.start();
    const response: any = await api.post(`/challenge/user/start`, {
      userId: "6160566cde2d7525a08dcd79",
      challengeId: id,
    })

    if (response.status == "200") {
      NProgress.done();
      Router.push(`/desafio/${id}`)
    }
  }

  return (
    <Link href={`/desafio/${id}`}>
    <ContainerC>
      <div className="circle"/>
      <div className="texts">
        <h2>{name}</h2>
        <h5>{desc}</h5>
      </div>
      <Link href={`/`}>
        <div className="leave" onClick={handleStartChallenge}>
          START
        </div>
      </Link>
    </ContainerC>
    </Link>
  );
};

export default ChallengeItemList;
