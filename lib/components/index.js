import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  state = {
    answer: 45
  };

  asyncFunc = () => {
    return Promise.resolve(37);
  };

  async componentDidMount(){
    this.setState({ // eslint-disable-line react/no-did-mount-set-state
      answer: await this.asyncFunc()
    });
  }

  render(){
    return(
      <h1>Hello world -- { this.state.answer }</h1>
    );
  }
}

ReactDom.render (
  <App />,
  document.getElementById('root')
);

export default App;
