import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './App.css';
import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import Input from './components/Input';
// import Test from './components/test.component';
import { RootState } from './redux/root.reducer';
import {  getSecretWord } from './redux/secret-word/secret-word.actions';


// Redux State
const mapStateToProps = (state: RootState) => {
  const { success, guessedWords, secretWord} = state;
  return { success, guessedWords, secretWord};
}

// Redux Actions
function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ getSecretWord }, dispatch);
}


// Create interface for props
export interface IProps
  extends ReturnType<typeof mapStateToProps>,
  ReturnType<typeof mapDispatchToProps>{
    // additonal props if any
}


export class UnconnectedApp extends React.Component<IProps> {
  componentDidMount(): void {
    this.props.getSecretWord();
  }

  render ()  {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success}></Congrats>
        <Input></Input>
        <GuessedWords guessedWords={this.props.guessedWords}></GuessedWords>
      </div>
    );
  }
  
}


export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);
