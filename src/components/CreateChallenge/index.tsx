import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { api } from '../../utils/api';
import { ButtonMarkdown, Container, MarkdownContainer } from './styles';

function CreateChallenge({ setChallenges, challengesState }) {
  const [form, setForm] = useState({
    title: "",
    desc: "",
    points: 0,
    limit: "",
  })
  const [editor, setEditor] = useState("editor")
  const [difficulty, setDifficulty] = useState("easy")
  const [challenge, setChallenge] = useState("")

  const updateForm = e => {
    const { name, value } = e.target
    setForm(prev => ({...prev, [name]: value }))
  }

  const handleCreateChallenge = async () => {
    try {
      const response: any = await api.post("/challenge/admin/create", {
        title: form.title,
        description: form.desc,
        challenge: challenge,
        difficulty: difficulty,
        points: form.points,
        limit: form.limit,
      })

      setChallenges([...challengesState, response.data.message])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <div className="inputs">
        <input name="title" onChange={e => updateForm(e)} type="text" placeholder="Title"/>
        <input name="desc" onChange={e => updateForm(e)} type="text" placeholder="Description"/>
        <input name="points" onChange={e => updateForm(e)} type="number" placeholder="Points"/>
        <input name="limit" onChange={e => updateForm(e)} type="text" placeholder="Limit"/>
        <div className="difficulty">
          <ButtonMarkdown onClick={() => setDifficulty("easy")} active={difficulty == "easy"}>Facil</ButtonMarkdown>
          <ButtonMarkdown onClick={() => setDifficulty("medium")} active={difficulty == "medium"}>Medio</ButtonMarkdown>
          <ButtonMarkdown onClick={() => setDifficulty("hard")} active={difficulty == "hard"}>Dificil</ButtonMarkdown>
        </div>
        <button className="send" onClick={handleCreateChallenge}>Send</button>
      </div>
      <MarkdownContainer>
        <div className="bts">
          <ButtonMarkdown onClick={() => setEditor("editor")} active={editor == "editor"}>Editor</ButtonMarkdown>
          <ButtonMarkdown onClick={() => setEditor("preview")} active={editor != "editor"}>Preview</ButtonMarkdown>
        </div>
        {
          editor == "editor" ? (
            <textarea spellCheck="false" value={challenge} onChange={(e) => setChallenge(e.target.value)}/>
          ) : (
            <div className="markdown">
              <ReactMarkdown>
                {challenge}
              </ReactMarkdown>
            </div>
          )
        }
      </MarkdownContainer>
    </Container>
  );
};

export default CreateChallenge;
