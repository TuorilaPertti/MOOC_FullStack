import React, { useState } from 'react'
import ReactDOM from 'react-dom'
 

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const VoteUp = (selected, upvoted) => {
    const upvote_copy = [...upvoted]
    upvote_copy[selected]  +=1
    return upvote_copy
}

const App = (props) => {
    const [selected, setSelected]   = useState(0)
    const [upvoted, setUpvoted]     = useState(points)

const GetBest = (props) => {
  const best = props.upvoted.indexOf(Math.max(...props.upvoted))
  return (
    <div>
      <p>{props.anecdotes[best]}</p>
    </div>
  )
}
  return (
    <div>
        <Button handleClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))} text='Shuffle'/>
        <Button handleClick={() => setUpvoted(VoteUp(selected, upvoted))} text='Upvote'/>
        <br></br>
        {props.anecdotes[selected]}
        <br />
        {upvoted[selected]}
        <br />
        <strong>Most liked anecdote:</strong>
        <GetBest anecdotes={anecdotes} upvoted={upvoted}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const points = new Array(anecdotes.length).fill(0)

ReactDOM.render(
  <App anecdotes={anecdotes} points={points} />,
  document.getElementById('root')
)