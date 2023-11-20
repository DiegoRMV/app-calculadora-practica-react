import React from "react";
import "../stylesheets/ButtonClear.css";

const ButtonClear = (props) => (
	<div
		className={props.children === "C" ? "button-c" : "button-clear"}
		onClick={props.clear}
	>
		{props.children}
	</div>
);

export default ButtonClear;
