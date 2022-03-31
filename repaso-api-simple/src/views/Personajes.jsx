import React,{useState, useEffect} from 'react';
import { SimpleGet } from '../actions/simpleGet2';

const Personajes = () => {

    const [personajes, setPersonajes] = useState();
    const [nombre, setNombre] = useState();
    const [personaje, setPersonaje] = useState();

    useEffect(() => {
        traerPersonajes();
    }, []);
    
    const traerPersonajes = async() => {
        const apiResponse = await SimpleGet('http://hp-api.herokuapp.com/api/characters')
        console.log(apiResponse)
        const grupo = apiResponse.filter((personaje, i)=> i < 20)
        setPersonajes(grupo);
        console.log(grupo)
    }

    const onChangeInput = (e) => {
        setNombre(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const newPersonaje = personajes.filter((persona,i)=> persona.name === nombre)
        console.log(newPersonaje)
        setPersonaje(newPersonaje[0])
    }
    
    return (
        <div>
            <select name="" id="">
                {personajes && personajes.map((personaje,i)=><option value={personaje.name} key={i}>{personaje.name}</option>)}
            </select>

            <form action="" onSubmit={onSubmit}>
                <input type="search" onChange={onChangeInput}/>
                <input type="submit" value="Traer"/>
            </form>
            <div>
                {personaje && <>
                    <p>{personaje.name}</p>
                    <img src={personaje.image} alt="" />
                </>}
            </div>
        </div>
    );
}

export default Personajes;
