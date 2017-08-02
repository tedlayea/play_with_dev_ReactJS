import React, { Component } from 'react';
import './App.css';
import Gameboard from './Gameboard.js';
// import back from './back.png'

class App extends Component {
  constructor(){
    super()
    this.state ={
      cards : [{rank:1, cardImage:"http://i.imgur.com/Sen3yXB.png"},{rank:2, cardImage:"http://i.imgur.com/pRx39s1.png"},
            {rank:3, cardImage:"http://i.imgur.com/c60v0xf.png"},{rank:4, cardImage:"http://i.imgur.com/sb4fQxL.png"},
            {rank:5, cardImage:"http://i.imgur.com/mHmd499.png"},{rank:6, cardImage:"http://i.imgur.com/84RTlHl.png"},
            {rank:7, cardImage:"http://i.imgur.com/fHH2ykU.png"},{rank:8, cardImage:"http://i.imgur.com/VJazUux.png"},
            {rank:9, cardImage:"http://i.imgur.com/mVG83SU.png"},{rank:10, cardImage:"http://i.imgur.com/G6RFgoR.png"},
            {rank:10, cardImage:"http://i.imgur.com/SUJioEj.png"},{rank:10, cardImage:"http://i.imgur.com/1c0m1xi.png"},
            {rank:20, cardImage:"http://i.imgur.com/m6QMT9M.png"},
            {rank:20, cardImage:"http://i.imgur.com/Kg91ykI.png"},
            {rank:0, cardImage:"http://i.imgur.com/IJ2yK9S.png"}],
      rewards : ["Put in stash: \n git stash save 'Message'","Delete untracked files (not staging):\n git clean -f",
            "Stop merge (in case of conflicts):\n git merge --abort","Show stats and summary of commits:\n git log --stat --summary","To create new heroku app:\n heroku create my-sweet-app", "To push to heroku branch: \n git push heroku branch_name:master", "To create new react app:\n create-react-app blog-app", "To create rails app with postgresql database: \n rails new tunr -d postgresql"]
    }
  }
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Play with Tech</h1>
          <h3>Instruction</h3>
          <h4>Choose any two cards any if the sum of the two cards greater than 16, you will win and some important information will be displayed that help you to revise some of the commands in web devlopment area. </h4>
        </div>
        <main>
          {/* <img src={back} /> */}
          <Gameboard allCards = {this.state.cards} allRewards = {this.state.rewards} />
        </main>
        <footer>
          <p>GA --- Copyright 2017 --- WDI-16 </p>
        </footer>
      </div>
    );
  }
}

export default App;
