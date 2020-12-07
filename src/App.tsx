import React, { Component } from 'react';
import './App.css';
import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import Input from './components/Input';
import Test from './components/test.component';

class  App extends Component {
  render ()  {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true}></Congrats>
        <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3}]}></GuessedWords>
        <Input></Input>
        <Test></Test>
      </div>
    );
  }
  
}

export default App;
