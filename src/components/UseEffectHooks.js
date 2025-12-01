import React, { useEffect } from 'react';

function UseEffectHooks() {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        console.log("Composant monté ou mis à jour");  
    });

    useEffect(() => {
        console.log("Composant monté");  
        return () => {
            console.log("Composant va être démonté");  
        };
    }, []);
    return (
        <div>
            <p>Compteur : {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrémenter</button>
        </div>
    );
}
export default UseEffectHooks;