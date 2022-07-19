import {Component} from 'react'
import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailIimg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    Heads: 0,
    Tails: 0,

    TossImage: headImg,
  }

  changeImage = () => {
    const {Heads, Tails} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = Heads
    let latestTailsCount = Tails

    if (toss === 0) {
      tossImage = headImg
      latestHeadsCount += 1
    } else {
      tossImage = tailIimg
      latestTailsCount += 1
    }

    this.setState({
      TossImage: tossImage,
      Heads: latestHeadsCount,
      Tails: latestTailsCount,
    })
  }

  /*

  changeImage = () => {
    const {Clicked} = this.state
    this.setState(prevState => ({Clicked: !prevState.Clicked}))

    if (Clicked) {
      this.setState({
        TossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({Tails: prevState.Tails + 1}))
      this.setState(prevState => ({Total: prevState.Total + 1}))
    } else {
      this.setState({
        TossImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })

      this.setState(prevState => ({Heads: prevState.Heads + 1}))
      this.setState(prevState => ({Total: prevState.Total + 1}))
    }
  } */

  render() {
    const {Heads, Tails, TossImage} = this.state
    const Total = Heads + Tails
    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={TossImage} className="toss-image" alt="toss result" />
          <button type="button" className="button" onClick={this.changeImage}>
            Toss Coin
          </button>

          <div className="scores">
            <p className="each-score">Total: {Total}</p>
            <p className="each-score">Heads: {Heads}</p>
            <p className="each-score">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
