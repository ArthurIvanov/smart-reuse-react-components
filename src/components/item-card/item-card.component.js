import React from "react";

import "./item-card.styles.css";
import Button from "../button/button.component";

const ItemCard = () => {
	return (
		<div className="item-card">
			<img
				className="item-img"
				src="https://cdn.aboutstatic.com/file/2c293cea3b2dc240540500a5869e9c31?height=2666&quality=75&bg=FFFFFF&brightness=0.96&trim=1"
				alt="t-shirt"
			/>
			<Button product>buy T-shirt</Button>
		</div>
	);
};

export default ItemCard;
