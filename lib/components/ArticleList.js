import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({articles, authors}) => {
  return(
    <div>
      {
        Object.values(articles).map((article) =>
          <ArticleItem key={article.id} article={article} author={authors[article.authorId]} />
        )
      }
    </div>
  );
};

export default ArticleList;
