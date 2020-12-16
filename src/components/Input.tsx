import React from "react";
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { bindActionCreators, Dispatch } from 'redux';

import { RootState } from '../redux/root.reducer';
// import { selectSuccess } from '../redux/success/success.selectors';

import { evaluateGuessedWord } from '../redux/GuessedWordsSlice';

// Component State
export interface IState {
  currentGuess: string;
}

// Redux State
// interface PropsFromState {
//     success: boolean;
// }

// const mapStateToProps = createStructuredSelector<RootState, PropsFromState>({
//     success: selectSuccess,
// });

const mapStateToProps = (state: RootState) => {
  const { success } = state;
  return { success };
}

// Redux Actions
function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ evaluateGuessedWord }, dispatch);
}

// Create interface for props
export interface InputProps
  extends ReturnType<typeof mapStateToProps>,
  ReturnType<typeof mapDispatchToProps>{
    // additonal props if any
}

// export interface IInput extends React.PureComponent<InputProps, IState> {
// }

export class UnconnectedInput extends React.Component<InputProps, IState> {
  constructor(props: InputProps)  {
    super(props);
    // initalize the state
    this.state = { currentGuess: '' }
  }

  submitGuessedWord = (evt:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    const guessedWord = this.state.currentGuess;
    if(guessedWord !== '' && guessedWord.length > 0){
      this.props.evaluateGuessedWord(guessedWord);
    }
    this.setState({ currentGuess: ''});
  }

    render(): JSX.Element {
      const contents = 
      this.props.success.status ? null : (
        <form className="form.inline">
          <input data-test="input-box" className="mb-2 mx-sm-3" type="text" placeholder="enter guess" value={this.state.currentGuess} onChange={(evt) => this.setState({currentGuess: evt.target.value}) }></input>
          <button data-test="submit-button" type="submit" className="btn btn-primaary mb-2" onClick={this.submitGuessedWord}>Submit</button>
        </form>
      );
      return(
        <div data-test="component-input">
          {contents}
        </div>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInput);