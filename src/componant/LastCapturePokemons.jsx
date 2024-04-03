import React from 'react';

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
                        <h2>{e.name}</h2>
                        <img src={e.image} alt={e.name} />
                        <p>Categorie {e.type}</p>
                        <p>Date {e.capturedAt}</p>
                    </>   
                )
            })

            }
            
        </div>
    );
};

export default LastCapturePokemons;