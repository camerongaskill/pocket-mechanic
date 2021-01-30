import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
	render() {
		return (
			<div>
				<header>
					<h1 id='title'>Pocket Mechanic</h1>
					<img src='logo.png' class='header-logo' alt='Pocket Mechanic Logo' />
				</header>
				<main>
					<form class='container center'>
						<h2>Let's Diagnose!</h2>
						<label clas='labe' for='question'>
							Do your headlights turn on?
						</label>
						<div class='form-buttons center'>
							<input type='button' value='No' />
							<input type='button' value='Yes' />
						</div>
					</form>
				</main>
				<footer></footer>
			</div>
		);
	}
}
