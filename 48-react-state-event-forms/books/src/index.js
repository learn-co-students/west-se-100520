import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// the 'element' object below is identical, just created with different syntax; either element could be used as the first argument of the .render() function
// let element = <h1>hello</h1>
// let element = React.createElement('h1', {}, 'hello')
ReactDOM.render(<App />, document.getElementById('root'));


