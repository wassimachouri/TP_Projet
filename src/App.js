import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import LifeCycleClass from './components/LifeCycleClass';
import Welcome from './components/Welcome';
import UseStateHooks from './components/UseStateHooks';
import UseEffectHooks from './components/UseEffectHooks';

function App() {
  const [showLifeCycle, setShowLifeCycle] = useState(true);

  return (
    <div className="App">
        <UseEffectHooks />
    </div>
  );
}

export default App;