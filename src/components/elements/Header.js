import React from "react";
import { Link } from "@reach/router";

import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";

import { StyledHeader, StyledRMDBLogo, StyledTMDBLogo } from "../styles/StyledHeader";

//1. learn how to create a styled basic styled cpmponent
//2. learn how to handle props in styled component
//3. create a global styled with styled components

function Header() {
	return (
		<StyledHeader>
			<div className="header-content">
				<Link to="/">
					<StyledRMDBLogo src={RMDBLogo} alt="rmdblogo" />
				</Link>
				<StyledTMDBLogo src={TMDBLogo} alt="tmdblogo" />
			</div>
		</StyledHeader>
	);
}

export default Header;
