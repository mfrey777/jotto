import React from "react";
import { connect } from 'react-redux';
import { RootState } from '../redux/root.reducer';

const mapStateToProps = (state: RootState ) => {
    return {};
}

// Merge Selector and Actions properties and add additioal properties (if required)
export interface IProps
  extends ReturnType<typeof mapStateToProps>{
}

class Input extends React.Component<IProps> {
    render(): JSX.Element {
        return <div></div>
    }
}

export default connect(mapStateToProps)(Input);