import React from 'react';
import Pokemon from './Pokemon';

const FirePokemons = ({pokemons}) => {
    
    const filterPokemon = pokemons.filter((e)=>{
        return e.type === "Fire"
    })
    console.log(filterPokemon);

    return (
        <div className='line'>
            <h2>pokemon de feu</h2>
            {filterPokemon.map((e)=>{
                return (
                    <>
                       <Pokemon pok={e}/>
                    </>
                )

            })
            }
            
        </div>
    );
};

export default FirePokemons;