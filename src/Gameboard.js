import React, { Component } from 'react';
class Gameboard extends Component {
  constructor(){
    super()
    this.state = {
      flip1 : 14,
      flip2 : 14,
      flip3 : 14,
      playedCards : []
    }
  }
  flip1function (){
    this.setState({
      flip1:  Math.floor(Math.random() * 13) + 1
    })
    this.state.playedCards.push(this.state.flip1)
    this.checkFunction()
  }
  flip2function (){
    this.setState({
      flip2: Math.floor(Math.random() * 13) + 1
    })
    this.state.playedCards.push(this.state.flip2)
    this.checkFunction()
  }
  flip3function (){
    this.setState({
      flip3: Math.floor(Math.random() * 13) + 1
    })
    this.state.playedCards.push(this.state.flip3)
    this.checkFunction()
  }
  checkFunction(){
    if (this.state.playedCards.length === 2) {
      if (this.state.playedCards[0] >10 || this.state.playedCards[1] > 10){
        alert("Congratulation, you won!!! Your reward: \n \n" + this.props.allRewards[Math.floor(Math.random() * 7) + 1])
      }
      else{
        alert("Sorry, you didn`t won. Try again !!!!")
      }
    }
  }
  resetFunction(){
    this.setState({
      flip1 : 14,
      flip2 : 14,
      flip3 : 14,
      playedCards : []
    })
  }

  render(){
    let cards = this.props.allCards

  return(
    <div>
      <div><button onClick={()=>this.resetFunction()}>Rest</button></div>
      <button onClick={()=>this.flip1function()}>
        <img src={cards[this.state.flip1].cardImage} alt={cards[this.state.flip1].rank}/>
      </button>
      <button onClick={()=>this.flip2function()}>
        <img src={cards[this.state.flip2].cardImage} alt={cards[this.state.flip2].rank}/>
      </button>
      <button onClick={()=>this.flip3function()}>
        <img src={cards[this.state.flip3].cardImage} alt={cards[this.state.flip3].rank}/>
      </button>
    </div>
  )
}

}
export default Gameboard;
