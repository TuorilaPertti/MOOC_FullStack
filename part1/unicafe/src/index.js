import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good,neutral,bad}) => {
    const all = good+neutral+bad

    return(
        <table>
            <th>STATISTICS</th>
            <tbody>
            {all===0 && <tr><td>no feedback</td></tr>}
            {all!==0 &&
            <>
            <Statistic text="good" value ={good} />
            <Statistic text="neutral" value ={neutral} />
            <Statistic text="bad" value ={bad} />
            <Statistic text="feedbacks" value={all}/>
            <Statistic text="average" value={(good-bad)/all}/>
            <Statistic text="positives" value={((good/all)*100)+'%'}/>
            </>
            }
            </tbody>
        </table>
    )
}

const Statistic = (props) => {
    return(
        <tr>
            <td>{props.text}: {props.value}</td>
        </tr>
        
    )
}

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1>Give Feedback</h1>
      <Button handleClick={() => setBad(bad+1)}         text="BAD :(" />
      <Button handleClick={() => setNeutral(neutral+1)} text="HMPH :|" />
      <Button handleClick={() => setGood(good+1)}       text="NICE :)" />

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)