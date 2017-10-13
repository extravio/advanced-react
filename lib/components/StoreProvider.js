import React from 'react';
import PropTypes from 'prop-types';

const StoreProvider = (Component) => {
  // create a Container Component

  return class App extends React.Component {

    static contextTypes = {
      store: PropTypes.object
    };

    static displayName = `${Component.name}Container`;

    render(){
      return(
        <Component {...this.props} store={this.context.store} />
      );
    }

  };

  // same but as a function Component

  // const WithStore = (props, {store}) =>
  //   <Component {...props} store={store} />;
  //
  // WithStore.contextTypes = {
  //   store: PropTypes.object
  // };
  //
  // WithStore.displayName = `${Component.name}Container`;
  //
  // return WithStore;
};

export default StoreProvider;
