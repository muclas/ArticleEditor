const ArticleService  = {
  articles: [
    { id: 1, title: 'Article 1', text: 'lorem ipsum', createdAt: '2018-04-25T16:44:39.359Z', createdBy: 'Tom Jones', createdById: 1},
    { id: 2, title: 'Article 2', text: 'lorem ipsum text', createdAt: '2018-04-25T17:14:39.359Z', createdBy: 'Tom Selleck', createdById: 2 },
    { id: 3, title: 'Article 3', text: 'lorem ipsum loretinum', createdAt: '2018-04-25T17:34:39.359Z', createdBy: 'Tom Petty', createdById: 3 },
  ],

  getArticles() {
    return this.articles;
  },

  getArticleById(id) {
    return this.articles[id-1];
  },

  getArticlesByAuthorId(id) {
    const ret = [];
    for (let i = 0;  i < this.articles.length; i++) {
      if (this.articles[i].createdById === id) {
        ret.push(this.articles[i]);
      }
    }
    return ret;
  },

  addNew(item) {
    item.id = this.articles.length+1;
    this.articles.push(item);
  }
}

export default ArticleService;
