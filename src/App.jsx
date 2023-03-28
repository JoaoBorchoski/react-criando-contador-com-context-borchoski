import { useContext } from "react";
import "./App.css";
import { CounterContext } from "./Contexts/CounterContext";

function App() {
    function Counter() {
        const { counter } = useContext(CounterContext);

        return <h1>{counter}</h1>;
    }
    function CounterControl() {
        const { aumentar, diminuir } = useContext(CounterContext);

        return (
            <div>
                <button onClick={diminuir}>-</button>
                <button onClick={aumentar}>+</button>
            </div>
        );
    }

    return (
        <div className="App">
            <Counter />
            <CounterControl />
        </div>
    );
}

export default App;
