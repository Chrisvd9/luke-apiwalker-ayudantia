import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Gamelist from '../components/GameList';


const Status = () => {

    return (
        <div>
            <h1>SATETGSFG</h1>
            <Router>
                <nav>
                    <ul>
                        <li><Link to='/status/game/1'>Game 1</Link></li>
                        <li><Link to='/status/game/2'>Game 2</Link></li>
                        <li><Link to='/status/game/3'>Game 3</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/status/game/:id'>
                        <Gamelist/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Status;
