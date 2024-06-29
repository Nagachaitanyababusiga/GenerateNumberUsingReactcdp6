import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generate = () => {
    this.setState(() => ({
      num: Math.round(Math.random() * 100),
    }))
  }

  render() {
    const {num} = this.state
    return (
      <div className="cont-1">
        <div className="cont-2">
          <h1 className="header">Random Number</h1>
          <p className="para">
            Generate a random number in the
            <br /> range of 0 to 100
          </p>
          <button className="btnpr" type="button" onClick={this.generate}>
            Generate
          </button>
          <p className="result">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
