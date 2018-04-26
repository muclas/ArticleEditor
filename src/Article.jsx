import React from 'react';
import { Link } from 'react-router-dom';
import ArticleService from './services/articleservice';

const Article = (props) => {
  let articleId = props.id ? props.id : props.match.params.id;
  let article = ArticleService.getArticleById(articleId);
  return (
    <div>
      <div>
        <b>Id:</b> {article.id} <b>Title: <Link to={`/article/${article.id}`}>{article.title}</Link></b>
      </div>
      <b>Text:</b> {article.text}
      <hr/>
    </div>
  )
}

export default Article;