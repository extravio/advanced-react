import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({articles, store}) => {
  return(
    <div>
      {
        Object.values(articles).map((article) =>
          <ArticleItem key={article.id} article={article} />
        )
      }
    </div>
  );
};

export default ArticleList;
