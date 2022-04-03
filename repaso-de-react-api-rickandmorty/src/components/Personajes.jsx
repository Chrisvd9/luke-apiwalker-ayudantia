import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { simpleGet } from '../actions/simpleGet';

const Personajes = () => {

    const [personajes, setPersonajes] = useState();
    const [personajeSelected, setSersonajeSelected] = useState();


    useEffect(() => {
        getPersonajes();
    }, []);

    const getPersonajes = async() =>{
        const response = await simpleGet("https://rickandmortyapi.com/api/character")
        console.log(response);
        setPersonajes(response.results);
    }

    // const displayPersonajes = () => {
    //     return personajes?.map((personaje,i)=><li><Link to="/rickandmorty/personajes">{personaje.name}</Link></li>)
    //

    useEffect(() => {
        const filter = personajes?.filter((personaje,i)=> personaje.id === personajeSelected)
        console.log(filter)
    }, [personajeSelected]);

    const seleccionarPersonaje = (e) => {
        setSersonajeSelected(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>Personajes de Rick and Morty</h1>
            <div>
                <ul>
                    {personajes?.map((personaje,i)=><li><Link to={"/rickandmorty/personaje/"+personaje.id}>{personaje.name}</Link></li>)}
                </ul>
            </div>
            <div>
                <select onChange={seleccionarPersonaje} name="" id="">
                    {personajes?.map((personaje,i)=><option value={personaje.id}>{personaje.name}</option>)}
                </select>
                <div>
                    {personajes?.filter((personaje,i)=> personaje.id === parseInt(personajeSelected)).map((personaje,i)=><p>{personaje.name}</p>)}
                </div>
            </div>
        </div>
    );
}

export default Personajes;
