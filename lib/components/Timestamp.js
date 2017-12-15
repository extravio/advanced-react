import React from 'react';
import storeProvider from './StoreProvider';

class Timestamp extends React.Component {
  render(){
    return(
      <div>
        { this.props.timestamp.toString() }
      </div>
    );
  }
}

function extraProps(store, originalProps) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeProvider(extraProps)(Timestamp);
