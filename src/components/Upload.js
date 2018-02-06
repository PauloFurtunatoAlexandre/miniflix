import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

class Upload extends Component {

	render() {

		return(
			<div>
			<Nav />
			<h3 className="text-center">Upload your 20 second video in a blink of an eye</h3>
			<hr />

			<div className="col-sm-12">
			<div className="jumbotrom text-center">
			<button className="btn btn-lg btn-info">Upload Video</button>
			</div>
			</div>
			</div>
			);
	}
}

export default Upload;