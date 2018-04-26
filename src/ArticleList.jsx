import React from 'react';
import Article from './Article';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((a) => {
        return (
          <Article key={a.id} id={a.id} />
        );
      })}
    <Link to='/newarticle'>Add new</Link>
    </div>
  );
}

export default ArticleList;
