import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import Informants from './containers/Informants'
import Mycroft from './components/Mycroft'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Super Secret Dead Drop</h1>
        </header>
      <Link to={'/mycroft'} >Mycroft</Link><br/>
      <Link to={'/informants'} >Informants</Link><br/>
      <hr />
      <Switch>
        <Route path={'/informants'}>
          <Informants />
        </Route>
        <Route path={'/mycroft'}>
          <Mycroft />
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
