import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [voteArray,setVoteArray] = useState(new Array(anecdotes.length).fill(0))  
  const highestVoteCount = Math.max(...voteArray)
  const indexOfHighestVoteCount = voteArray.indexOf(highestVoteCount)
  const mostPopular = anecdotes[indexOfHighestVoteCount]
  

  /// important method for updating arrays in js
  const handleVoteArray = () => {
    const nextCounters = voteArray.map((v, i) => {
      if (i === selected) {
        return v + 1; 
      } 
      else {
        return v;
      }
    });
    return(
      setVoteArray(nextCounters)
    )
  }

  const anecdoteHandler = () => {
    const min = 0
    const max = anecdotes.length-1
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return(
      setSelected(rand)
    )
  }
  
  return (
    <>
      <Anecdotes anecdote={anecdotes[selected]} />
      <Button selectAnecdote={anecdoteHandler} />
      <Vote handleVoteArray={handleVoteArray} />
      <MostPopularAnecdote mostPopular={mostPopular} highestVoteCount={highestVoteCount} />
    </>
    )
  }

  const MostPopularAnecdote = (props) => {
    if (props.highestVoteCount !==0) {
      return(
        <>
        <h1>Anecdote With Most Votes</h1>
        <h3>{props.mostPopular}</h3>
        </>
        )
    }
  }

  const Anecdotes = (props) => {
    return(
      <>
        <h1>Most Popular Anecdote Today</h1>
        <h3>{props.anecdote}</h3>
      </>
    )
  }

  const Button = (props) => {
    return(
      <>
        <button onClick={props.selectAnecdote}>Next Quip</button>
      </>
      )
    }

  const Vote = ({handleVoteArray},{selected}) => {
    return(
      <>
        <button onClick={handleVoteArray}>Vote</button>
      </>
    )
  }

export default App


