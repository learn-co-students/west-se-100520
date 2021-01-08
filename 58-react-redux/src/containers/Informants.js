import React from 'react'
import { 
    BrowserRouter as Router,
    Link,
    Route, 
    Switch,
    useRouteMatch
} from 'react-router-dom'
import Sherlock from '../components/Sherlock'
import Watson from '../components/Watson'

export default function Informants(props) {

    const {path, url} = useRouteMatch()
    console.log(useRouteMatch())

    return (
        <Router>

       <div>
       <Link to={`${url}/sherlock`}>Sherlock</Link><br/>
       <Link to={`${url}/watson`}>Watson</Link><br/>
        </div>
        <Switch>
            <Route path={`${path}/sherlock`}>
                 <Sherlock/>
            </Route>
            <Route path={`${path}/watson`}>
                 <Watson/>
            </Route>
        </Switch>

       </Router>
    )
}
