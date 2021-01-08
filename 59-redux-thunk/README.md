# Redux Thunk

## Overview

- problem: async actions in redux
- redux thunk plumbing
- What is a thunk
- middleware pattern

## Async actions in redux

In vanilla React, we'd do our fetch in componentDidMount. Now that we're using redux, we dispatch actions instead of setting the state:

```js
componentDidMount() {
  fetch(URL)
    .then(res => res.json())
    .then(paintings => this.props.fetchedPaintings(paintings)))
}
```

We want to move our logic out of our components and into redux.

Why?

1. Components shouldn't know about state management logic. If we delete this component, we might still want to load the paintings. One goal of redux is to decouple our components from our state.
2. We want more control over how our actions work. For instance, we want to dispatch a 'FETCHING' action before our fetch so that we can show a spinner
3. We might want to access something else in the store, just for the action. We don't want to pollute this component with extra data if we can avoid it

## Solution: Redux Thunk

- Thunk lets us write more complex action creators
- Instead of returning action objects, action creators can return _thunks_

**Thunk**: a function we can dispatch

Thunks get in the dispatch function as an argument, so they can dispatch further actions.

## Thunk Plumbing

`yarn add redux-thunk`

```
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
```

Now we can use thunks!

## Using Thunks

Now our actionCreators can return thunk actions - functions that will get called with `dispatch`.

```js
// plain old actionCreator
const fetchedPaintings = (paintings) => {
  return { type: "FETCHED_PAINTINGS", paintings }
}

// Thunk actionCreator
const fetchPaintings = () => {
  return (dispatch) => {
    fetch(URL)
      .then(res => res.json())
      .then(paintings => dispatch(fetchedPaintings(paintings))) 
  }
}
```

Now, in our component, we can just call the prop function:

```js
componentDidMount() {
  this.props.fetchPaintings();
}
```

## Spinner

We did all this thunking so that we could introduce a new state 'loading' - let's actually add that!

```js
const loadingPaintings = () => {
  return {type: "LOADING_PAINTINGS" }
}

const fetchPaintings = () => {
  return (dispatch) => {
    dispatch(loadingPaintings())
    fetch(URL)
      .then(res => res.json())
      .then(paintings => dispatch(fetchedPaintings(paintings))) 
  }
}
```

We can dispatch multiple times from a thunk! This is handy when we want to do something immediately, and something else async, or when we want to compose multiple actions into a single dispatch (e.g. "load and select user")

## Middleware Pattern

Let's take another look at this 'middleware' pattern.

All of redux-thunk:

```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

The middleware - like our root reducer - gets called for each of the actions that get dispatched to the store. Instead of getting in the state, it gets in the `dispatch` and `getState` functions, as well as the `next` middleware in the sequence.

It can do whatever it wants with the action, and then call the `next` middleware in the line with the action. In this case, thunk takes any of the actions that are functions and invokes them. Any actions that aren't functions, it 'ignores' by passing them to the next middleware unchanged.

## More complex thunks

Now that we are loading our paintings in from the server, lets make our increaseVotes and updatePainting actions actually save the new data to our server. 

With thunk action creators, we can change this logic 'under the hood' - without the components even knowing the difference.

```js
function increaseVotes(paintingId) {
  // return { type: "INCREASE_VOTES", paintingId }
  return (dispatch) => {
    // we need the painting's votes! 
    const votes = ???
    fetch(URL, {method: "PATCH", body: JSON.stringify({
      id: paintingId,
      votes
    })})
  }
}
```

Conveniently, thunk actions get called with not only the `dispatch` function, but also the `getState` function.

```js
function increaseVotes(paintingId) {
  // return { type: "INCREASE_VOTES", paintingId }
  return (dispatch, getState) => {
    // we need the painting's votes! 
    const votes = getState().paintings.find(p => p.id === paintingId).votes + 1;
    fetch(URL, {method: "PATCH", body: JSON.stringify({
      id: paintingId,
      votes
    })})
  }
}
```

## Challenge: Thunk Actions

1. Dispatch an action from the `increaseVotes` thunk action to update the painting once the fetch resolves. You may need to update the reducer.
2. Add a thunk action to update the painting's title and artist info on the server. 
3. After the promise resolves, update the painting in the store.
4. Update your thunks - `increaseVotes` and `updatePainting` to use the same helper function once the promise resolves. 

## BONUS Challenge: PaintingContainer Refactor

Notice how our PaintingsContainer has a fairly complicated `render` function. We can simplify it by making each Route render with the `component` prop instead of the `render` prop.

1. refactor the PaintingForm `mapStateToProps` so that you can render it as the `component` prop of the `Route`
2. refactor the PaintingDetail component in the same way
3. extract into a component the div wrapping the Searchbar and PaintingsList