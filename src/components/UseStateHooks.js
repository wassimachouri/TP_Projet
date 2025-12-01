import React, { useState } from 'react';

function UseStateHooks() {
    const [state, setState] = useState(0);

    // Fonction pour mettre à jour l'état
    const updateState = (newState) => {
        setState(newState);
    };  
    return (
        <div>
            <p>État actuel : {state}</p>
            <button onClick={() => updateState('Nouvel État')}>Mettre à jour l'état</button>
        </div>
    );
}   
export default UseStateHooks;