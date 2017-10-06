import React from 'react';
import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  // asyncFunc = () => {
  //   return Promise.resolve(37);
  // };
  //
  // async componentDidMount(){
  //   this.setState({ // eslint-disable-line react/no-did-mount-set-state
  //     answer: await this.asyncFunc()
  //   });
  // }

  render(){
    return(
      <ArticleList articles={this.state.articles}  authors={this.state.authors} />
    );
  }
}

export default App;
