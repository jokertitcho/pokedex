import React from 'react';

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
                        <h2>{e.name}</h2> 
                        <img src={e.image} alt={e.name}/>
                        <p>categorie {e.type}</p>
                    </>
                )

            })
            }
            
        </div>
    );
};

export default FirePokemons;