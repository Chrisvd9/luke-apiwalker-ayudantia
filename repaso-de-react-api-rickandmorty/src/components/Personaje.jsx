import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import { simpleGet } from '../actions/simpleGet';


const Personaje = () => {

    const {id} = useParams();
    const [personaje, setPersonaje] = useState();
    const history = useHistory();

    useEffect(() => {
        getPersonaje();
    }, []);

    const getPersonaje = async() => {
        const response = await simpleGet("https://rickandmortyapi.com/api/character/"+id)
        console.log(response);
        setPersonaje(response);
    }

    const volver = () => {
        history.push("/rickandmorty/personajes");
    }

    return (
        <div>
            <img src={personaje?.image}/>
            <h3>{personaje?.name}</h3>
            <button onClick={volver}>Volver</button>
        </div>
    );
}

export default Personaje;
