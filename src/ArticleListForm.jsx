import React from 'react';
import ArticleList from './ArticleList';
import ArticleService from './services/articleservice';

export default class ArticleListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }
  }

  itemAdded() {
    this.setState({
      articles: ArticleService.getArticles(),
    })
  }

  componentWillMount() {
    this.setState({
      articles: ArticleService.getArticles(),
    })
  }

  render () {
    return (
      <div>
        <h2>All Articles</h2>
        <ArticleList itemAdded={this.itemAdded.bind(this)} articles={this.state.articles} />
      </div>
    );
  }
}