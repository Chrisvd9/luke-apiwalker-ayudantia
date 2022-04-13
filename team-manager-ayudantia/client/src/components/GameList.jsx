import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect, useParams} from "react-router-dom";


const Gamelist = () => {

    const { id } = useParams();

    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
}

export default Gamelist;
