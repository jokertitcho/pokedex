import React from 'react';
import Pokemon from './Pokemon';

const LastCapturePokemons = ({pokemons}) => {
    

    const pokTrie = pokemons.sort(function (a, b){
      return  a.capturedAt - b.capturedAt
    })
    
    const threeLast = pokTrie.slice(-3)

    return (
        <div className='line'>
            {threeLast.map((e)=>{
                return (
                    <>
                        <Pokemon pok={e} />
                    </>   
                )
            })

            }
            
        </div>
    );
};

export default LastCapturePokemons;