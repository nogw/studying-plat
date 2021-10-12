import { Container, ItemListS } from './styles';

function ItemList({ id, challengeId, time }) {
  return (
    <ItemListS>
      <div className="square"/>
      <div className="texts">
        <h2>{challengeId}</h2>
        <h5>{time}</h5>
      </div>
    </ItemListS>
  )
}

function ChallengesToApprove({challengesToApprove}) {
  return (
    <Container>
      <div className="challenges">
        {
          challengesToApprove?.map(v => {
            return (
              <ItemList 
                id={v._id} 
                challengeId={v.challengeId} 
                time={v.time}
              />
            )
          })
        }
      </div>
    </Container>
  );
};

export default ChallengesToApprove;
