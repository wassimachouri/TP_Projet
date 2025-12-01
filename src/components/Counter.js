import React, { useState } from 'react';  // Importer React et useState

function Counter() {
  // Déclaration du state 'count' initialisé à 0
  const [count, setCount] = useState(0);

  // Fonction pour incrémenter le compteur
  const increment = () => {
    setCount(count + 1);  // Met à jour la valeur du state 'count'
  };

  return (
    <div>
      <p>Compteur : {count}</p>  {/* Affiche la valeur du compteur */}
      <button onClick={increment}>Incrémenter</button>  {/* Bouton pour incrémenter */}
    </div>
  );
}

export default Counter;