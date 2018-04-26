import React from 'react';
import { render } from 'react-dom';
import ArticleListForm from './ArticleListForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewArticleForm from './NewArticleForm';
import ArticleService from './services/articleservice';
import Article from './Article';

const App = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ArticleListForm} />
        <Route path='/newarticle' component={NewArticleForm} />
        <Route path='/article/:id' component={Article} />
      </Switch>
    </BrowserRouter>
  </main>
);

render(<App />, document.getElementById('root'));
