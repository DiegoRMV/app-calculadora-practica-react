import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ButtonClear from "./components/ButtonClear";
import Screen from "./components/Screen";
import { evaluate } from "mathjs";

function App() {
	const [input, setInput] = useState("");

	const addInput = (val) => {
		setInput(input + val);
	};

	const calculate = () => {
		if (input) {
			try {
				setInput(evaluate(input).toString());
			} catch (error) {
				console.log(error)
				alert("no se puede calcular la operacion")
			}
		} else {
			alert("Por favor ingrese valores");
		}
	};

	return (
		<div className="App">
			<div className="calculator-container">
				<Screen input={input} />
				<div className="row">
					<Button actionClick={addInput}>1</Button>
					<Button actionClick={addInput}>2</Button>
					<Button actionClick={addInput}>3</Button>
					<Button actionClick={addInput}>+</Button>
				</div>
				<div className="row">
					<Button actionClick={addInput}>4</Button>
					<Button actionClick={addInput}>5</Button>
					<Button actionClick={addInput}>6</Button>
					<Button actionClick={addInput}>-</Button>
				</div>
				<div className="row">
					<Button actionClick={addInput}>7</Button>
					<Button actionClick={addInput}>8</Button>
					<Button actionClick={addInput}>9</Button>
					<Button actionClick={addInput}>*</Button>
				</div>
				<div className="row">
					<Button actionClick={calculate}> = </Button>
					<Button actionClick={addInput}>0</Button>
					<Button actionClick={addInput}>.</Button>
					<Button actionClick={addInput}>/</Button>
				</div>
				<div className="row">
					<ButtonClear clear={() => setInput("")}>Clear</ButtonClear>
					<ButtonClear clear={() => setInput(input.slice(0, -1))}>C</ButtonClear>
				</div>
			</div>
		</div>
	);
}

export default App;
