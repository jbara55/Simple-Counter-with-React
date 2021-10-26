//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

export function SimpleCounter(props) {
	return (
		<div className="Counter">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="five">{props.digitFive}</div>
			<div className="four">{props.digitFour}</div>
			<div className="three">{props.digitThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne}</div>
		</div>
	);
}

let counter = 0;
setInterval(function() {
	const five = Math.floor((counter / 10000) % 10);
	const four = Math.floor((counter / 1000) % 10);
	const three = Math.floor((counter / 100) % 10);
	const two = Math.floor((counter / 10) % 10);
	const one = Math.floor((counter / 1) % 10);
	counter++,
		//render your react application
		ReactDOM.render(
			<SimpleCounter
				digitOne={one}
				digitTwo={two}
				digitThree={three}
				digitFour={four}
				digitFive={five}
			/>,
			document.querySelector("#app")
		);
}, 1000);

SimpleCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number
};
