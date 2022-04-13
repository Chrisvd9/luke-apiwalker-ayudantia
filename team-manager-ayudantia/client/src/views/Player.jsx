import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";


const Player = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data))
            .catch((err)=> console.log('Error: ', err));
    }, []);
    
    const RemoveFromDom = (playerId) => {
        setPlayers(players.filter(player => player._id !== playerId))
    }


    return (
        <div className='container p-3 bg-ligth rounded mt-3 mb-4'>
            
        </div>
    );
}

export default Player;
