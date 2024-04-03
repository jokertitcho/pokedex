import React from 'react';

const RandomPokemon = ({pokemons}) => {
    
    const randomPok = pokemons[Math.floor(Math.random()*pokemons.length)]

    return (
        <div>
           <h2>pokemon generé au hazar</h2> 
           <h2>{randomPok.name}</h2> 
           <img src={randomPok.image} alt={randomPok.name}/>
           <p>categorie {randomPok.type}</p>
           <p>Date {randomPok.capturedAt}</p>
        </div>
    );
};

export default RandomPokemon;