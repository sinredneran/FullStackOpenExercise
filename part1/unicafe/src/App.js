import { useState } from 'react'
import Header from './Header'
import Button from "./Button";
import StatisticLine from './StatisticLine';

const Statistics = (props) => {
  const data = props.data;
  return (
    <>
      <h1>Statistics</h1>
      {data.total === 0 ?
        <p>No feedback given</p> :
        <div className="detail">
          <table>
            <tbody>
              <StatisticLine text="good " value={data.numGood} />
              <StatisticLine text="neutral " value={data.numNeutral} />
              <StatisticLine text="bad " value={data.numBad} />
              <StatisticLine text="all " value={data.total} />
              <StatisticLine text="average " value={isNaN(data.average()) ? 0 : data.average()} />
              <StatisticLine text="positive " value={isNaN(data.positivePer()) ? 0 + ' %' : data.positivePer() + ' %'} />
            </tbody>
          </table>
        </div>
      }
    </>
  );
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const data = {
    numGood: good,
    numNeutral: neutral,
    numBad: bad,
    total: good + neutral + bad,
    average: function () {
      return ((this.numGood - this.numBad) / this.total);
    },
    positivePer: function () {
      return (this.numGood / this.total) * 100;
    },
  }

  const handleGoodValue = () => {
    setGood(val => val + 1);
  }
  const handleNeutralValue = () => {
    setNeutral(val => val + 1);
  }
  const handleBadValue = () => {
    setBad(val => val + 1);
  }

  return (
    <div>
      <Header head="give feedback" />
      <div className="buttons">
        <Button handleValue={handleGoodValue} name="good" />
        <Button handleValue={handleNeutralValue} name="neutral" />
        <Button handleValue={handleBadValue} name="bad" />
      </div>
      <Statistics data={data} />
    </div>
  )
}

export default App
