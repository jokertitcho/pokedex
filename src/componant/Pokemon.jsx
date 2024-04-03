import React from 'react';

const Pokemon = ({pok}) => {
    return (
        <div>
                        <h2>{pok.name}</h2>
                        <img src={pok.image} alt={pok.name} />
                        <p>Categorie {pok.type}</p>
                        <p>Date {pok.capturedAt}</p>
        </div>
    );
};

export default Pokemon;