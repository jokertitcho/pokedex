import React from 'react';
import Pokemon from './Pokemon';

const RandomPokemon = ({pokemons}) => {
    
    const randomPok = pokemons[Math.floor(Math.random()*pokemons.length)]

    return (
        <div>
           <h2>pokemon generé au hazar</h2> 
           <Pokemon pok={randomPok}/>
        </div>
    );
};

export default RandomPokemon;