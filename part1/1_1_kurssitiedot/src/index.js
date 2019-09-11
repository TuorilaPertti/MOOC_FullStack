import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return(
    <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return(
        <p>
            {props.part} {props.exercises}
        </p>
    )
}
const Content = (props) => {
    return(
        <>
        <Part part={props.p1} exercises={props.e1}></Part>
        <Part part={props.p2} exercises={props.e2}></Part>
        <Part part={props.p3} exercises={props.e3}></Part>
        </>
    )
}

const Total = (props) => {
    return(
    <p>Number of exercises {props.total}</p>
    )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
        <Header course={course}/>
        <Content 
            p1={part1} e1={exercises1} 
            p2={part2} e2={exercises2} 
            p3={part3} e3={exercises3}/>
        <Total total={exercises1+exercises2+exercises3}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))