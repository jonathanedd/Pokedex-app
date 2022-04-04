import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
    const PokedexCard = ({ pokemonUrl}) => {

    const [ pokemonCard, setPokemonCard ] = useState({});

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemonCard(res.data));
    }, [pokemonUrl])

    // console.log(pokemonCard);

    return (
        <li className='card-list'> 
            
            <Link to={`/pokedex/${pokemonCard.id}`} className="cards">
                <img className='img-style' src={pokemonCard.sprites?.other?.dream_world?.front_default} alt="" />
                <h3>Name: {pokemonCard.name} </h3>
                <p>Height : {pokemonCard.height} </p>
                <p>Weight: {pokemonCard.weight} </p>
                {/* <br />{pokemonCard.species?.name.toString()}  */}
            </Link>
                    
         </li>
    );
};

export default PokedexCard;