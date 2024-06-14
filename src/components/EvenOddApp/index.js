// Write your code here
// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  change = () => {
    const randnum = Math.ceil(Math.random() * 100)
    this.setState(prevstate => ({count: prevstate.count + randnum}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card-cont">
          <h1>Count {count}</h1>
          <p>Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
          <button type="button" onClick={this.change}>
            Increment
          </button>
          <p>*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
