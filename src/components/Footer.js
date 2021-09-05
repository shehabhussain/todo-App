import React from "react";
import "./App.css";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className="footer">
			<h4>Made with 🔥🚀 Shehab Hussain {year}</h4>
		</div>
	);
};

export default Footer;
