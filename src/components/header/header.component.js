import React from "react";

import "./header.styles.css";

import Button from "../button/button.component";

const Header = () => (
	<div className="header">
		<Button signin rounded>
			signin
		</Button>
		<Button signup rounded>
			signup
		</Button>
	</div>
);

export default Header;
