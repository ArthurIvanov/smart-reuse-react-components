import React from "react";
import PropTypes from "prop-types";

import "./button.styles.css";

const Button = ({ children, signin, signup, rounded, product }) => (
	<button
		// Added conditional applying classes based
		//on input values as props for component.
		// At the end is applied default button class
		className={`${signin ? "signin" : ""} 
		${signup ? "signup" : ""} 
		${rounded ? "rounded" : ""} 
		${product ? "product" : ""} 
        button
    `}
	>
		{children}
	</button>
);

// Typechecking for incoming props for component
Button.propTypes = {
	children: PropTypes.any,
	signin: PropTypes.bool,
	signup: PropTypes.bool,
	rounded: PropTypes.bool,
	product: PropTypes.bool,
};

Button.defaultProps = {
	children: "Default Button",
};

export default Button;
