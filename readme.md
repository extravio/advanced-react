# Advanced-react course on Pluralsight

## Tips

async / await needs babel-polyfill

use NODE_PATH in package.json to avoid relative paths problems

## Async

in lib/server.js, we need to use await serverRender() and make the get call async

in StateApi, lookupAuthor and getState are declared as class properties so we don't have to deal with bindings

## Context API

Using the Context API breaks the ArticleListTest because the store is no longer passed to the ArticleItem component as a prop.
To fix the test we can use shallow rendering instead of tree rendering so that only the ArticleList component is rendered/tested (using Enzyme).
