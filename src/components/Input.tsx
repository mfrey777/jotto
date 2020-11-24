import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState } from '../redux/root.reducer';
import { selectSuccess } from '../redux/game/game.selectors';


// Redux Selectors
interface PropsFromState {
    success: boolean;
  }

const mapStateToProps = createStructuredSelector<RootState, PropsFromState>({
    success: selectSuccess,
  });

// Merge Selector and Actions properties and add additioal properties (if required)
export interface IProps
  extends ReturnType<typeof mapStateToProps>{
}

class Input extends React.Component<IProps> {
    render(): JSX.Element {
        return <div>
          <button />
        </div>
    }
}

export default connect(mapStateToProps)(Input);