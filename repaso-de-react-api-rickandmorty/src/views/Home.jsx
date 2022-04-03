import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Personaje from '../components/Personaje';
import Personajes from '../components/Personajes';


const Home = () => {

    return (
        <div>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/rickandmorty/personajes">Personajes</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/rickandmorty/personajes">
                        <Personajes></Personajes>
                    </Route>
                    <Route path="/rickandmorty/personaje/:id">
                        <Personaje></Personaje>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Home;
