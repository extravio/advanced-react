import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({articles, articleActions}) => {
  return(
    <div>
      {
        Object.values(articles).map((article) =>
          <ArticleItem key={article.id} article={article} actions={articleActions} />
        )
      }
    </div>
  );
};

export default ArticleList;
