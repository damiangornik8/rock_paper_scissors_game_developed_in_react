import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


import Button from 'react-bootstrap/Button';


import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Col, Row, Form, Container, Alert } from "react-bootstrap";

import iconRock from './img/iconRock.png'; 



let userChoice = "";
let aiChoice = "";


let userWin_Count = 0;
let aiWin_Count = 0;
let user_WonGames_Count = 0;
let ai_WonGames_Count = 0;

// if (userChoice == 'rock' && aiChoice == 'rock') {
//   console.log('Tie')

// } else if (userChoice == 'rock' && aiChoice == 'scissors') {
//   userWin_Count = userWin_Count + 1;


// } else if (userChoice == 'rock' && aiChoice == 'paper') {
//   aiWin_Count = aiWin_Count + 1;


// } else if (userChoice == 'scissors' && aiChoice == 'paper') {
//   userWin_Count = userWin_Count + 1;
// } 

// else if (userChoice == 'scissors' && aiChoice == 'rock') {
//   aiWin_Count = aiWin_Count + 1;
// }

// else if (userChoice == 'paper' && aiChoice == 'scissors') {
//   aiWin_Count = aiWin_Count + 1;
// }


// else if (userChoice == 'paper' && aiChoice == 'rock') {
//   userWin_Count = userWin_Count + 1;
// }



// userChoice = button => {
//   const x = button.target.className;
//   switch (x) {
//       case 'rock':
//           console.log('All Saves');

//           userChoice = 'rock'

//           userChoice_PrintOut = 'Rock'
//           break;
//       case 'paper':
//           console.log('Threads');
//           break;
//       case 'scissors':
//           console.log('Comments');
//           break;
//       default:
//           return false;
//   }
// }





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice_PrintOut: "",
      aiChoice_PrintOut: "",

      user_WonGames_Count_PrintOut: "",
      ai_WonGames_Count_PrintOut: "",

      roundResult_PrintOut: ""
    }
  }

  // aiChoice = () => {

  //   aiChoice = 'rock';

  // };

  
 
  userChoice = (id) => {

    if (id === 'rock') {
      userChoice = 'rock';

      this.setState({ userChoice_PrintOut: "Rock"});



    } else if (id === 'paper') {
      userChoice = 'paper';

      this.setState({ userChoice_PrintOut: "Paper"});
    } 
    
    else if (id === 'scissors') {
      userChoice = 'scissors';

      this.setState({ userChoice_PrintOut: "Scissors"});
    } 



    let randomNumber = Math.floor(Math.random() * 3) + 1 ;

    if (randomNumber == 1) {
      aiChoice = 'rock';

      this.setState({ aiChoice_PrintOut: "Rock"});


    } else if  (randomNumber == 2) {
      aiChoice = 'paper';

      this.setState({ aiChoice_PrintOut: "Paper"});
    }

    else if  (randomNumber == 3) {
      aiChoice = 'scissors';

      this.setState({ aiChoice_PrintOut: "Scissors"});
    }


    

    // <aiChoice />

    
  
    

    if (userChoice === 'rock' && aiChoice === 'rock') {

      this.setState({ roundResult_PrintOut: "Tie"});


    
    } else if (userChoice === 'rock' && aiChoice === 'scissors') {
      userWin_Count = userWin_Count + 1;

      this.setState({ roundResult_PrintOut: "User Scores"});
    
    
    } else if (userChoice === 'rock' && aiChoice === 'paper') {
      aiWin_Count = aiWin_Count + 1;

      this.setState({ roundResult_PrintOut: "AI Scores"});
    
    
    } else if (userChoice === 'scissors' && aiChoice === 'paper') {
      userWin_Count = userWin_Count + 1;

      this.setState({ roundResult_PrintOut: "User Scores"});
    } 
    
    else if (userChoice === 'scissors' && aiChoice === 'rock') {
      aiWin_Count = aiWin_Count + 1;

      this.setState({ roundResult_PrintOut: "AI Scores"});
    }
    
    else if (userChoice === 'paper' && aiChoice === 'scissors') {
      aiWin_Count = aiWin_Count + 1;

      this.setState({ roundResult_PrintOut: "AI Scores"});
    }
    
    
    else if (userChoice === 'paper' && aiChoice === 'rock') {
      userWin_Count = userWin_Count + 1;

      this.setState({ roundResult_PrintOut: "User Scores"});
    } 
    
    else if (userChoice === 'paper' && aiChoice === 'paper') {

      this.setState({ roundResult_PrintOut: "Tie"});


    
    }
    else if (userChoice === 'scissors' && aiChoice === 'scissors') {

      this.setState({ roundResult_PrintOut: "Tie"});
    }


    if (userWin_Count == 10){
      alert("User won the game!");

      userWin_Count = 0;
      aiWin_Count = 0

      user_WonGames_Count = user_WonGames_Count + 1;
    }

    else if (aiWin_Count == 10) {
      alert("AI won the game!");

      userWin_Count = 0;
      aiWin_Count = 0;

      
      ai_WonGames_Count = ai_WonGames_Count + 1;

 
    }

    this.setState({ user_WonGames_Count_PrintOut: user_WonGames_Count});

    this.setState({ ai_WonGames_Count_PrintOut: ai_WonGames_Count});

    this.setState({ userWin_Count_printOut: userWin_Count});

    this.setState({ aiWin_Count_printOut: aiWin_Count});

  }
 
  render() {


  return (
    <div className="Dashboard">
      <header className="App-header">
   

        <Container>
  
  <Row>
    <Col > <button  id="rock" variant="primary" onClick={e => this.userChoice(e.target.id)} className="button button-rock">  Rock </button> </Col>
    <Col> <button id="paper" variant="primary" onClick={e => this.userChoice(e.target.id)} className="button button-paper"> Paper</button> </Col>
    <Col> <button id="scissors" variant="primary" onClick={e => this.userChoice(e.target.id)} className="button button-scissors"> Scissors</button> </Col>
  </Row>
</Container>



       
{/* 
      <p>
          User Choice: 
        </p>

        <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.userChoice_PrintOut }
        </div> */}

        <Container>
  
  <Row>
    <Col > 
    
    <h2> User Choice:  </h2>
    
    </Col>
    <Col>
    
    
    
    <h2> AI Choice:  </h2>
    
    
    
    </Col>
  </Row>

  <Row>
    <Col>

    <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.userChoice_PrintOut }
        </div>
    
    
    </Col>


    <Col> 
    
    <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.aiChoice_PrintOut }
        </div>


    
    
     </Col>
  </Row>
  
</Container>





<Container>
  
  <Row>
    <Col > 
    
    <h2> Result:  </h2>
    
    </Col>

  </Row>

  <Row>
    <Col>

    <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.roundResult_PrintOut }
        </div>
    
    
    </Col>



  </Row>
  
</Container>



        <Container>
  
  <Row>
    <Col > 
    
    <h2> User Score: </h2>
    
    </Col>
    <Col>
    
    
    
    <h2> AI Score</h2>
    
    
    
    </Col>
  </Row>

  <Row>
    <Col>

    <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.userWin_Count_printOut }
        </div>
    
    
    
    </Col>


    <Col> 
    
    <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.aiWin_Count_printOut }
        </div>


    
    
     </Col>
  </Row>
  
</Container>


<Row>
    <Col>

    <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.user_WonGames_Count_PrintOut }
        </div>
    
    
    
    </Col>


    <Col> 
    
    <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.ai_WonGames_Count_PrintOut}
        </div>


    
    
     </Col>
  </Row>

      {/* <p> User Score Count: </p>

        <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.userWin_Count_printOut }
        </div>

        <p> AI  Score Count: </p>

        <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.aiWin_Count_printOut }
        </div> */}


      </header>



     
    </div>
   );
  }
}

export default App;
