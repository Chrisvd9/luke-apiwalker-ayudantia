import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Player from './views/Player';
import Status from './views/Status';

function App() {
  return (
    <div className="container text-center">
      <h1 className='display-5 my-2'>Team Manager</h1>
      <Router>
        <div>
          <div className='container p-3'> 
            <div className='row'>
              <div className='col-6'>
                <Link to='players/list'><button className='btn btn-outline-primary w-'><i className="fas fa-users me-2"></i>Administrador de jugadores</button></Link>
              </div>
              <div className='col-6'>
                <Link to='/status/game/1'><button className='btn btn-outline-success w-'><i className="fas fa-users me-2"></i>Administrar status</button></Link>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Redirect from='/' to='/players/list' exact/>
          <Route path="/players/list">
            <Player/>
          </Route>
          <Route path='/status/game/:id'>
          <Status />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
