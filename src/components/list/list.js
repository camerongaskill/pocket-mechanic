import React, { Component } from 'react';
import './list.css';

export default class List extends Component {
	render() {
		return (
			<div>
				<header>
					<h1 id='title'>Pocket Mechanic</h1>
					<img src='logo.png' class='header-logo' alt='Pocket Mechanic Logo' />
				</header>
				<main>
					<h2>Possible Solutions</h2>
					<ul>
						<li>
							<img class='thumbnail' src='placeholder.jpg' alt='placeholder' />
							<div class='text'>
								<a href=''>
									<h3>Brake Pads</h3>
								</a>
								<p>
									Worn brake pads are often diagnosed by a loud screeching sound
									when brakes are applied, as well as braking distanced being
									increased.
								</p>
							</div>
						</li>
					</ul>
				</main>
				<footer></footer>
			</div>
		);
	}
}
