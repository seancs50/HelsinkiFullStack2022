import { useState } from 'react'

const App = () => {
  const [globalCount, setGlobalCount] = useState(0)
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodClick = () => {
    setGlobalCount(globalCount+1)
    setGood(good+1)
  }
  const handleNeutralClick = () => {
    setGlobalCount(globalCount+1)
    setNeutral(neutral+1)
  }
  const handleBadClick = () => {
    setGlobalCount(globalCount+1)
    setBad(bad+1)
  }
  const average = ((-1 * bad) + good)/(good+neutral+bad)
  const positive = Math.floor((good/(good + neutral + bad))*100) // math.floor gives int value
  

  return (
    <div>
      <ButonHeader />
      <Button handler={handleBadClick} text={"bad"} />
      <Button handler={handleNeutralClick} text={"neutral"} />
      <Button handler={handleGoodClick} text= {"good"} />
      <StatisticsHeader />
      <Statistics bad={bad} neutral={neutral} good={good} average={average} positive={positive} globalCount={globalCount} /> 
    </div>
  )
}
const ButonHeader = () => <h2>Please Give Us Your Feedback</h2>

const Button = (props) =>{
  return (
    <>
       <button onClick = {props.handler}>{props.text}</button>
    </>
      )
}

const StatisticsHeader = () => 
  <h2>Statistics</h2>

const Statistics = (props) => {
  return(
    <>
    <table>
      <tbody>
        <StatisticsLine text={"Bad"} count={props.bad} />
        <StatisticsLine text={"Neutral"} count={props.neutral} />
        <StatisticsLine text={"Good"} count={props.good} />
        <Analysis average={props.average} positive={props.positive} globalCount={props.globalCount} />
      </tbody>
    </table></>
  )
}

const StatisticsLine = (props) =>{
  return (
    <>
    <tr>
      <td>{props.text}</td><td>{props.count}</td>
    </tr>
    </>
  )
}

const Analysis =(props) => {
  if (props.globalCount===0 ) {
    return(
      <tr>
        <td>No Feedback Given Yet</td>
      </tr>
      )
    }
    return (
      <>
        <tr>
          <td>Average of Feedback:</td><td> {props.average.toFixed(1)}</td>
        </tr>
        <tr>
          <td>Positve Feedback:</td><td> {props.positive}%</td>
        </tr>
      </>
    )
}


export default App
