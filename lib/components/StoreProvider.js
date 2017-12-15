import React from 'react';
import PropTypes from 'prop-types';

const StoreProvider = (extraProps = () => ({})) => (Component) => {
  // create a Container Component

  return class extends React.PureComponent {

    static contextTypes = {
      store: PropTypes.object
    };

    static displayName = `${Component.name}Container`;

    onStoreChange = () => {
      if (this.subscriptionId) {
        this.forceUpdate();
      }
    }

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    render(){
      return(
        <Component
          {...this.props}
          { ...extraProps(this.context.store, this.props) }
          store={this.context.store} />
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
