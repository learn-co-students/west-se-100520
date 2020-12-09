# Intro to React Components, JSX and Props

## SWBAT
- [] review Js to better understand react 
- [] Start to understand the Virtual DOM
- [] See what a React Component actually is (an object, made by a class or function)
- [] Build custom components and see initial JSX
- [] Learn how to identify components on a page, visually
- [] Understand how create-react-app works and what it offers a developer
- [] Learn about props and how to pass data through components 
- [] Get more familiarity with component hierarchy and the flow of information

## A website that uses react 
[airbnb](https://www.airbnb.com/s/all?refinement_paths%5B%5D=%2Fplaylists%2F42221&last_search_session_id=5d680aa6-8cc4-43f2-9ad5-d2f4c836d528&search_type=section_navigation)

## Create React App
[React](https://reactjs.org/docs/create-a-new-react-app.html)
```
npm i -g create-react-app

```

## package.json
- always install packages via the terminal  
```
npm install 

npm run start

```

## index.js
```
// index.js is the root of your react tree
// import brings in packages you's like to use
// here we are importing react 
import React from 'react';

// ReactDom is a package that lets us use DOM methods 
import ReactDOM from 'react-dom';

// this is importing our css file
import './index.css';

// App is our first react component 
import App from './App';

 ReactDOM.render( <App />, document.getElementById('root'));



``