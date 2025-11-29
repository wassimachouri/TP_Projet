import React from "react";

class LifeCycleClass extends React.Component {
   constructor(props) {
        super(props);
        this.state = { count:  props.initialCount || 0 , initialCount: props.initialCount || 0 };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);    
        console.log("Constructeur : Initialisation du state");
       
    }
    static getDerivedStateFromProps(nextProps, prevState) { 
        if (nextProps.initialCount !== prevState.initialCount) {
            console.log("getDerivedStateFromProps : Mise à jour de l'état en fonction des nouvelles props");
            return {
                count: nextProps.initialCount,
                initialCount: nextProps.initialCount
            };
        }
}
increment() {
    console.log("Bouton incrémenté");
    this.setState((prevState) => {
        const newCount = prevState.count + 1;
        console.log("Incremented count to:", newCount);
        return { count: newCount };
    });
}
decrement() {
    console.log("Bouton décrémenté");
    this.setState((prevState) => {
        const newCount = prevState.count - 1;
        console.log("Decremented count to:", newCount);
        return { count: newCount };
    });
}
  

    componentDidMount() {
        console.log("componentDidMount : Composant monté dans le DOM");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate : Décision de mise à jour du composant");
        return true; // Toujours mettre à jour pour cet exemple
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate : Avant la mise à jour du DOM");
        return null; // Pas de valeur de snapshot pour cet exemple
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate : Composant mis à jour");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount : Composant va être démonté");
    }

    render() {
        console.log("Render : le composant est en train d'être affiché");
        return (
            <div>
                <h2>Compteur avec Cycle de Vie</h2>
                <p>Compteur : {this.state.count}</p>
                <button onClick={this.increment}>Incrémenter</button>
                <button onClick={this.decrement}>Décrémenter</button>
            </div>
        );
    }

}
export default LifeCycleClass;