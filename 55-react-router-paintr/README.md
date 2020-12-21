# React Router

## SWBATs
- define client-side vs. server-side routing
- know the key components to use from react-router
- understand how to pass props to a component rendered by a Route
- be familiar with the match object passed in render props and how it can be used

## Resource
- [React Router Docs]('https://reactrouter.com/web/guides/quick-start')

## Overview

- Routing Intro
- History API
- React Router Library
- Building with React Router
- `withRouter` and HOCs

## Routing

**Static and Dynamic Routing**
Static routing is what we're used to with Rails. Basically, we define the routes beforehand, and then render their actions separately.

React Router is Different. Basically, the app "renders" routes while rendering all of the JSX. This means no external routes.

**Client-side routing**
Now that the React stack is handling routing, that means none of our routes require a new GET request to the backend to get that page's HTML. This allows us to enforce the "Single Page App", since we can render the new route's page without refreshing.

**User Experience of Routing**
- The user can use forward/back to navigate your app
- The user can navigate via urls
- We can make urls describe the action that the user might be taking

**Drawbacks**
- We're loading all of our frontend at once, so it might add to the initial load time
- We have to design all of our routes to be coupled with our component structure (which can be a good thing long-term)

## Browser APIs

How does client-side routing _work_?

Ultimately, we're still in a Single-Page application. We can use the `location` and `history` APIs to interact with the url displayed in the top bar and interact with the stack of pages in the browser's history.

```js
window.history.pushState({}, null, 'page');
window.history.back();
```

React Router wraps this functionality in components that make it easy to transform the browser's URL.

## React Router Plumbing

Add the package
```sh
yarn add react-router-dom
```

```js
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
```

## React Router Components

### Router
We'll use this in one place in our application (and one place only). It sets up the 'plumbing' for the rest of the components. It makes route info accessible to all of the children below it in the React tree, and updates them when the url changes.

### Route
Conditionally render a certain component based on what the route looks like.

```js
<Route path="/login" component={LoginForm} />
{ url matches '/login' ? show LoginForm component : null }
```

### Link
Changes the url we see in the browser, must have a 'to' prop.

Variant `NavLink` also takes a prop `activeClassName` and renders differently when the link matches the current url.

### Switch
Renders only one Route. Picks the first that matches, (doesn't look at the others) - like an if/ else if/ else if.

### Redirect
Forces a redirect to a particular route. We won't use this here.

## Route Child Props

In rails, we had params from the url:

```ruby
# config/routes.rb

get '/users/:id', to: 'users#show'

# users_controller.rb

def show
  User.find(params[:id])
end
```

We need to access information from the 'match' data in React Router.

```js
// Parent

render() {
  ...
  <Route path='/painting/:id' component={PaintingDetail} />
  ...
}

// PaintingDetail

componentDidMount() {
  console.log(this.props.match.params.id)
}
```

### Route `render` prop

If we want to pass other props into a component through a Route, instead of passing `component`, we can pass a prop called `render`. The render prop is a function that the Route calls to decide what to show.

```js
<Route
  path="/paintings/:id"
  render={() =>
    <PaintingDetail painting={selectedPainting} edit={this.edit} />}
  />
```

If we want to access the match or location data, we can! It comes in as the argument to the render prop.


```js
<Route
  path="/paintings/:id"
  render={({match, location, history}) =>
    <PaintingDetail id={match.params.id} edit={this.edit} />}
  />
```

### Other render props

We have access to more than just `match`!

`location` tells us about the current url.

`history` is a wrapped-up version of the `window.history` API. It gives us:
- previous locations the browser has been to
- functions to push a location onto the history stack

### `withRouter`

If we want access to `location`, `match`, and `history` in some other component, we can use the `withRouter` function to pass them in as props.

```js
import { withRouter } from 'react-router-dom'

class NeedsTheInfo extends React.Component {
  render() {
    <div>{this.props.location}</div>
  }
}

export default withRouter(NeedsTheInfo);
```

A function that takes in a component and returns a specialized version of that component - is called the 'Higher Order Component' pattern.
