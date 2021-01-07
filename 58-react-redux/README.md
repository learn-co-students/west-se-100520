## Overview

Our goal today is to build a React app using the react-redux library. We'll cover:

- Thinking in Redux
- `combineReducers`
- `mapStateToProps`
- `mapDispatchToProps`
- Action Creators

## Thinking in Redux

So far, we've only used redux in a tiny sample application. Let's refactor our paintr app to use redux!

The steps we'll follow when we're thinking in Redux resemble our Thinking In React steps.

( 0. Set up redux, react-redux plumbing )

1. Figure out the "shape" of your state
  - Minimal representation of UI state, same as React
  - Focus on single source of truth
  - "Shape" = keys and the _types_ of their values, e.g. { count: number, friends: [string] }
  - Decide initial values
2. Add 'static' version of state using Redux
  - Create 'default' reducers with initial values (or maybe mock data)
  - Connect state to components with `mapStateToProps`
3. Figure out how state changes over time
  - List the actions that will be triggered in your app
  - Decide how your state should change in response to each action
4. Implement actions and reducers
  - Write action creators
  - Write cases in reducers that correspond to each action
  - Connect actions to components with `mapDispatchToProps`

## Figuring out the shape of our state

If we are adopting redux on our existing project, we can just use the state that we chose for React.

If we are designing our state from scratch, we'll need to follow the same rules as we did for choosing the 'minimal' state in React. Identify the different things that could show up on the screen, and figure out what data we'll need in order to represent that view.

> Note: Some components might keep local state, instead of moving the state to redux. A good rule of thumb: If more than one component needs the data, it probably should go in redux.

## Connecting our components to redux: combineReducers

## mapStateToProps

## mapDispatchToProps

## Action creators

## bindActionCreators

[In the Redux docs](https://redux.js.org/api/bindactioncreators)

There's a common pattern when we're defining mapDispatchToProps with action creators - we want functions that are basically the same, but they dispatch the results. `bindActionCreators` takes in an object of action creators and the dispatch function, and 'binds' them. It returns new functions that do the same thing, but the results are immediately dispatched.

That gives us a nice shortcut when we're defining mapDispatch to props:

```js
import { updateSearchText } from '../redux/actions'
const actionCreators = {
  updateSearchText: updateSearchText
}
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);
connect(null, mapDispatchToProps)(Searchbar)
```

## Sugar

`connect` will do it for us.

```js
import { updateSearchText } from '../redux/actions';

connect(null, { updateSearchText })(Searchbar)
```