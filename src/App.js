import './App.css';
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1);

    const handleInput = (e) => {
        e.preventDefault()
        setCounter(c => Number(e.target.value))
    }

    const increment = () => {
        return setCounter(c => c + step)
    }

    const decrement = () => {
        return setCounter(c => c - step)
    }

    const handleRange = (e) => {
        setStep(c => Number(e.target.value))
    }

    const message = (counter) => {
        let currentDate = new Date()
        if (counter > 0) {
            let days = currentDate.getDate() + counter
            let message = ' days from now is '
            return counter + message + new Date(currentDate.setDate(days)).toDateString()
        }
        if (counter < 0) {
            let days = currentDate.getDate() + counter
            let message = ' days ago from now is '
            return counter + message + new Date(currentDate.setDate(days)).toDateString()
        }

        return "Today is " + currentDate.toDateString()
    }

    return (
        <div className="container">
            <h1 className={"text-center"}>Data Counter v2</h1>
            <div className="row d-flex justify-content-center text-center">
                <div className="col">
                    <input
                        type="range"
                        min={"0"}
                        max={"10"}
                        // value={"0"}
                        name="volume" onChange={handleRange}/>
                    <label htmlFor="volume">{step}</label>
                </div>
            </div>
            <div className="row d-flex justify-content-center text-center">
                <div className="col">
                    <button className={"btn btn-success m-1"} onClick={decrement}>-</button>
                    <input type="text" onChange={handleInput} value={counter}/>
                    <button className={"btn btn-success m-1"} onClick={increment}>+</button>
                </div>
            </div>

            <div className="row text-center">
                <div className="col">
                    {message(counter)}
                </div>
            </div>

        </div>
    );
}

export default App;
