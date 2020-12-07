// React
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import { getSecretWord } from '../redux/secret-word/secret-word.actions';
import { selectSecretWord } from '../redux/secret-word/secret-word.select';
import { RootState } from '../redux/root.reducer';

// Redux Selectors
interface PropsFromState {
    word: string;
}

const mapStateToProps = createStructuredSelector<RootState, PropsFromState>({
  word: selectSecretWord,
});

// Redux Actions
function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ getSecretWord }, dispatch);
}

// Merge Selector and Actions properties and add additioal properties (if required)
export interface IProps
  extends ReturnType<typeof mapStateToProps>,
  ReturnType<typeof mapDispatchToProps> {
}

// class definition
class Test extends React.Component<IProps> {
  
  onCallWordApi = () => {
    const { getSecretWord } = this.props;
    getSecretWord();
  }  
  render() {
      const { word } = this.props;
    return (
      <div>
          <button onClick={this.onCallWordApi}>Call Word Api</button>
          <p> Returned word : { word }</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
