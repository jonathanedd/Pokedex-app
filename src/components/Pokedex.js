import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import PokedexCard from './PokedexCard';


const Pokedex = () => {

    const userName = useSelector( state => state.userName);
    const navigate = useNavigate();

    const [ pokemons , setPokemons ] = useState([]);
    const [ pokemonType, setPokemonType ] = useState([]);
    const [ pokemonName, setPokemonName ] = useState('');


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100')
            .then( res => setPokemons(res.data.results));

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setPokemonType(res.data.results));
    }, [])

    // console.log(pokemons);
    // console.log(pokemonType);

    const submit = (e) => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonName}`)
    }

    const handlePokemonType = (e) => {
        console.log(e.target.value);
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }

    // console.log(pokemons);
    

    return (
        <div className='pokedex-container'>
            {/* <h1>Pokedex</h1> */}
            <p> Welcome { userName } </p>

            <div className="select">
                <select onChange={handlePokemonType}>
                    <option >Select by Pokemon type</option>
                    {/* <option value="2">Option 2</option> */}
                    {
                        pokemonType.map( type => (
                            <option key={type.url} value={type.url}>
                                {type.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <form className="input-container" onSubmit={submit}>

                <label htmlFor="pokedex-name" > Pokemon name: </label>
                <input 
                    type="text" 
                    id='pokedex-name'
                    value={pokemonName}
                    onChange={ e => setPokemonName(e.target.value)}
                />
                <button>Search</button>
                
            </form>

            
            <ul>
            {
                pokemons.map( pokemon  => (
                    <PokedexCard 
                        pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url } 
                        key={pokemon.url ? pokemon.url : pokemon.pokemon.url } 
                    />
                    
                ))
            }
            </ul>
        </div>
    );
};

export default Pokedex;