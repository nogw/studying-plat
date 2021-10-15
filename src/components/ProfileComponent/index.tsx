import { Container } from './styles';
import { FaCheckCircle, FaClock } from 'react-icons/fa'

function ProfileComponent({ user }) {
  return (
    <Container>
      <div className="user">
        <div className="user-icon">
          <h2>{(user.name).substring(0, 2).toUpperCase()}</h2>
        </div>
        <h1>{user.name}</h1>
      </div>
      
      <div className="achievements">
        <div className="completed">
          <FaCheckCircle className="icon check"/>
          <h1>{(user.completedChallenges).length}</h1>
        </div>
        <div className="inProgress">
          <FaClock className="icon clock"/>
          <h1>{(user.inProgressChallenges).length}</h1>
        </div>
      </div>
    </Container>
  );
};

export default ProfileComponent;
