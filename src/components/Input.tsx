import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, Dispatch } from 'redux';

import { RootState } from '../redux/root.reducer';
import { selectSuccess } from '../redux/success/success.selectors';

import { guessWord } from '../redux/guessed-words/guessed-words.actions'


// Redux State
interface PropsFromState {
    success: boolean;
  }

const mapStateToProps = createStructuredSelector<RootState, PropsFromState>({
    success: selectSuccess,
  });

// Redux Actions
function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ guessWord }, dispatch);
}

// Create interface for props
export interface IProps
  extends ReturnType<typeof mapStateToProps>,
  ReturnType<typeof mapDispatchToProps>{
    // additonal props if any
}

class Input extends React.Component<IProps> {
    render(): JSX.Element {
      const contents = 
      this.props.success ? null : (
        <form className="form.inline">
          <input data-test="input-box" className="mb-2 mx-sm-3" type="text" placeholder="enter guess"></input>
          <button data-test="submit-button" type="submit" className="btn btn-primaary mb-2">Submit</button>
        </form>
      );
      return(
        <div data-test="component-input">
          {contents}
        </div>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);