import React from "react";
import "../stylesheets/Button.css";

function Button(props) {
	const isOperator = (valor) => {
		return isNaN(valor) && valor !== "." && valor !== "=";
	};

	return (
		<div
			className={`button-container ${
				isOperator(props.children) ? "operator" : ""
			}`.trimEnd()}
			onClick={() => props.actionClick(props.children)}
		>
			{props.children}
		</div>
	);
}

export default Button;
