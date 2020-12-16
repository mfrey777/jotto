import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { RootState } from './redux/root.reducer';
import { getSecretWord } from './redux/secretWordSlice';

import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import Error from './components/Error';
import Input from './components/Input';

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
interface IProps
  extends ReturnType<typeof mapStateToProps>,
  ReturnType<typeof mapDispatchToProps>{
    // additonal props if any
}

export class UnconnectedApp extends React.Component<IProps> {

  componentDidMount() {
    // console.log('App componentDidMount() executed')
    this.props.getSecretWord();
  }

  render ()  {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success.status}></Congrats>
        <Error error={this.props.secretWord.error}></Error>
        { this.props.secretWord.loading
        ? <div> Loading </div>
        : <div>
            <Input></Input>
            <GuessedWords guessedWords={this.props.guessedWords.words}></GuessedWords>
          </div>
        }
      </div>
    );
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);
