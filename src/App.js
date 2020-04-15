import React from "react";
import "./app.styles.css";

import Header from "./components/header/header.component";
import ItemCard from "./components/item-card/item-card.component";
import Button from "./components/button/button.component";

const App = () => {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<ItemCard />
				{/* Button with default props value */}
				<Button />
			</div>
		</div>
	);
};

export default App;
