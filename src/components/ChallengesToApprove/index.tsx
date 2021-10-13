import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { api } from '../../utils/api';
import { Bgc } from '../Navbar/styles';
import { Container, ItemListS, PopUpChallenge } from './styles';
import materialOceanic from '../Challenge/theme'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

function PopUpChallengeToApprove({ challenge }) {
  const setChallenge = async (set) => {
    try {
      const response = await api.post("/challenge/admin/set", {
        set: set,
        challengeId: challenge.challengeId,
        userId: challenge.userId
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PopUpChallenge>
      <h1>user id: {challenge?.userId}</h1>
      <h2>sent on: {challenge?.time}</h2>
      <SyntaxHighlighter  
        style={materialOceanic} 
        language="python" 
        PreTag="div"  
        children={challenge?.solution}
      />
      <div className="bts">
        <button onClick={() => setChallenge(true)} className="button approve">APPROVE</button>
        <button onClick={() => setChallenge(false)} className="button reject">REJECT</button>
      </div>
    </PopUpChallenge>
  )
}

function ChallengesToApprove({ challengesToApprove }) {
  const [challenge, setChallenge] = useState([])
  const [show, setShow] = useState(false)

  const getChallenge = async (userId, id) => {
    const response: any = await api.get(`/challenge/user/challenge/${userId}/${id}`)
    setChallenge(response.data.message)
    setShow(true)
  }

  return (
    <>
      {
        show && (
          <AnimatePresence>
            <PopUpChallengeToApprove challenge={challenge}/>
            <Bgc
              onClick={() => setShow(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
        )
      }
      <Container>
        <div className="challenges">
          {
            challengesToApprove?.map(v => {
              return (
                <ItemListS key={v._id} onClick={() => getChallenge(v.userId, v.challengeId)}>
                  <div className="square"/>
                  <div className="texts">
                    <h2>{v.challengeId}</h2>
                    <h5>{v.time}</h5>
                  </div>
                </ItemListS>
              )
            })
          }
        </div>
      </Container>
    </>
  );
};

export default ChallengesToApprove;
