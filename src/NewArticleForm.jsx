import React from 'react';
import ArticleService from './services/articleservice';

export default class NewArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    };
  }

  titleChanged(e) {
    this.setState({
      title: e.target.value,
    });
  }

  textChanged(e) {
    this.setState({
      text: e.target.value,
    });
  }

  saveClicked(e) {
    e.preventDefault();
    ArticleService.addNew(
      { title: this.state.title, text: this.state.text, });
    this.setState({
      title: '',
      text: '',
    });
  }

  saveAndCloseClicked(e) {
    e.preventDefault();
    ArticleService.addNew(
      { title: this.state.title, text: this.state.text, });
    this.props.history.push('/');
  }

  render() {
    return(
      <div>
        Title: <input type="text" onChange={this.titleChanged.bind(this)} value={this.state.title} /><br/>
        Text: <input type="text" onChange={this.textChanged.bind(this)} value={this.state.text} /><br/>
        <button onClick={this.saveAndCloseClicked.bind(this)}>Save and close</button>
        <button onClick={this.saveClicked.bind(this)}>Save</button>
      </div>
    );
  }
}