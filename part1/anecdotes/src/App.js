import { useState } from 'react'
import MostVoted from './MostVoted';

const Button = (props) => {
  return (
    <button onClick={props.handleFunc}>{props.name}</button>
  );
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const points = [1, 4, 6, 3, 5, 2, 0]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([...points]);

  const handleRandom = () => {
    const min = 0;
    const max = anecdotes.length;
    const rand = Math.floor(Math.random() * (max - min) + min);
    setSelected(rand);
  }

  const copy = [...votes];
  const handleVote = () => {
    copy[selected] += 1;
    setVotes(copy);
  }

  const max = () => {
    const max = Math.max(...votes);
    return votes.indexOf(max);
  }
  console.log(anecdotes[max()]);
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <div className="buttons">
        <Button handleFunc={handleVote} name={'vote'} />
        <Button handleFunc={handleRandom} name={'next anecdote'} />
      </div>
      <MostVoted anecdote={anecdotes[max()]} vote={votes[max()]} />
    </div>
  )
}

export default App;