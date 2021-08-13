import React, { useState } from "react";

const App = () => {
	const [input, setInput] = useState([]);
	const [result, setResult] = useState("");
	const [toggle, setToggle] = useState(false);
	let [operation, setOperation] = useState("");

	const inputHandler = (e) => {
		setInput(e.target.value);
	};

	const operationHandler = (x) => {
		setOperation(x);
		if (input !== "") {
			if (toggle === false) {
				setResult(parseFloat(input));
				setInput(result);
				setToggle(!toggle);
			} else {
				if (result !== "" && input !== "") {
					if (operation === "+") {
						setResult(result + parseFloat(input));
					} else if (operation === "-") {
						setResult(result - parseFloat(input));
					} else if (operation === "x") {
						setResult(result * parseFloat(input));
					} else if (operation === "/") {
						setResult(result / parseFloat(input));
					}
					setInput("");
					console.log("has value");
				} else {
					if (operation === "+") {
						setInput(result + parseFloat(input));
					} else if (operation === "-") {
						setInput(result - parseFloat(input));
					} else if (operation === "x") {
						setInput(result * parseFloat(input));
					} else {
						setInput(result / parseFloat(input));
					}
					setResult(input);
					setToggle(!toggle);
				}
			}
		}
	};

	const resultHandler = () => {
		if ((result !== "" && input !== "") || isNaN(result)) {
			if (operation === "+") {
				setResult(result + parseFloat(input));
			} else if (operation === "-") {
				setResult(result - parseFloat(input));
			} else if (operation === "x") {
				setResult(result * parseFloat(input));
			} else {
				setResult(result / parseFloat(input));
			}
			setToggle(false);
			setInput("");
			setOperation("");
		}
	};

	const emptyHandler = () => {
		setInput("");
		setResult("");
		setToggle(false);
		setOperation("");
	};
	return (
		<div className="App">
			<div className="calculator-div">
				<div className="indicator-div">
					<input
						className="indicator"
						value={input}
						type="number"
						onChange={inputHandler}
						placeholder="Input"
					/>
					<h6>{operation}</h6>
				</div>
				<div className="indicator-div2">
					<input
						className="indicator-2"
						value={result}
						type="number"
						onChange={inputHandler}
						readOnly
						placeholder="Result"
					/>
				</div>

				<div className="calc-body">
					<div className="num-pad">
						<button className="seven" onClick={() => setInput(input + "7")}>
							7
						</button>
						<button onClick={() => setInput(input + "8")}>8</button>
						<button onClick={() => setInput(input + "9")}>9</button>
						<button onClick={() => setInput(input + "4")}>4</button>
						<button onClick={() => setInput(input + "5")}>5</button>
						<button onClick={() => setInput(input + "6")}>6</button>
						<button onClick={() => setInput(input + "1")}>1</button>
						<button onClick={() => setInput(input + "2")}>2</button>
						<button onClick={() => setInput(input + "3")}>3</button>
						<button className="clear" onClick={emptyHandler}>
							c
						</button>
						<button onClick={() => setInput(input + "0")}>0</button>
					</div>
					<div className="operation-pad">
						<button className="plus" onClick={() => operationHandler("+")}>
							+
						</button>
						<button onClick={() => operationHandler("-")}>-</button>
						<button onClick={() => operationHandler("x")}>X</button>
						<button onClick={() => operationHandler("/")}>/</button>
					</div>
				</div>
				<button className="equal" onClick={resultHandler}>
					=
				</button>
			</div>
		</div>
	);
};

export default App;
