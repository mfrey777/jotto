import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import Input from './components/Input';
import Test from './components/test.component';
import { RootState } from './redux/root.reducer';
import {  getSecretWord } from './redux/secret-word/secret-word.actions';



const mapStateToProps = (state: RootState) => {
  const { success, guessedWords, secretWord} = state;
  return { success, guessedWords, secretWord};
}


// Create interface for props
export interface IProps
  extends ReturnType<typeof mapStateToProps>{
}


class App extends React.Component<IProps> {
  render ()  {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success}></Congrats>
        <Input></Input>
        <GuessedWords guessedWords={this.props.guessedWords}></GuessedWords>
        <Test></Test>
      </div>
    );
  }
  
}


export default connect(mapStateToProps, { getSecretWord })(App);
