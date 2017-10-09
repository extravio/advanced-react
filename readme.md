# Advanced-react course on Pluralsight

## Tips

async / await needs babel-polyfill

use NODE_PATH in package.json to avoid relative paths problems

## Async

in lib/server.js, we need to use await serverRender() and make the get call async

in StateApi, lookupAuthor and getState are declared as class properties so we don't have to deal with bindings
