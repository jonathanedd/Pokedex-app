import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const PokedexInfo = () => {

    const { id } = useParams();
    const [pokemonInfo , setPokemonInfo ] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemonInfo(res.data))
    }, [ id ])


    // Movements iteration 
    // const movements = pokemonInfo.moves?.map((move) => move.move.name);

    // const abilities = pokemonInfo.abilities?.map( ability => ability.ability.name);
    // console.log(movements);
    // console.log(abilities);
    console.log(pokemonInfo);

    return (
        <> 
            <div className='poke-info-container'>
                
                

                <div className='weight-height-box'>
                    <img className='img-info' src={pokemonInfo.sprites?.other.dream_world.front_default} null alt="/" />
                    <h4><p>Weight</p>{pokemonInfo.weight}</h4> 
                    <h4><p>Height</p>{pokemonInfo.height}</h4>
                    <h1>{pokemonInfo.name}</h1>
                    <p>#{pokemonInfo.id}</p>
                </div>



                <div className='abilities-box'>
                    
                    <ul>
                        <h4>Abilities:</h4>
                        {
                            pokemonInfo.abilities?.map( ability => (
                                <li key={ability.ability.url}>
                                    {ability.ability.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>


                <div className='type-box'>
                    <h4>Type:</h4>
                    <ul>
                        {
                            pokemonInfo.types?.map( type =>(
                                <li>
                                    {type.type.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>


                


                <div className='movements-box'>
                    <h4>Movements</h4>
                    <ul>
                        {
                            pokemonInfo.moves?.map( move => (
                                <li key={move.move.url}>
                                    {move.move.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>

            
            </div>


            

            
        </>
    );
};

export default PokedexInfo;