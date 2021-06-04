
import './App.css';

import Calculator from './context/Calculator';
import { CalculatorController } from './context/CalculatorController';
function App() {

  const name = "Thansuda"
  return (
    <div className="App">
      <CalculatorController>
        <Calculator />
      </CalculatorController>

    </div>
  );
}

export default App;
