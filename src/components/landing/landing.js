import React, { Component } from 'react';
import './landing.css';

export default class Landing extends Component {
	render() {
		return (
			<div>
				<header>
					<h1 id='title'>Pocket Mechanic</h1>
					<img src='logo.png' class='header-logo' alt='Pocket Mechanic Logo' />
				</header>
				<main>
					<section id='application-start'>
						<div class='hero-image'>
							<div class='hero-text'>
								<h2 id='greeting'>Something wrong with your car?</h2>
								<button type='button' id='start-button'>
									Let's Diagnose
								</button>
							</div>
						</div>
					</section>
					<section id='application-info'>
						<h2>Car repair simplified</h2>
						<p>Keep a mechanic in your pocket</p>
						<article class='summary'>
							<h2>What this application is about</h2>
							<p>
								Pocket mechanic was created to keep the stress out of car
								repair. Have you heard one too many auto shop horror stories of
								a customer being taken advantage of? This is made to fix that,
								simply go through the user-friendly prompts and self-diagnose
								your car. Although it helps to know exactly what is wrong with
								your car, Pocket Mechanic will at least let you know what you
								don't need, saving your money for the important repairs. Here at
								Pocket Mechanic, we belive that nobody should be left stuck in
								the mud.
							</p>
						</article>
						<img src='logo.png' class='logo' alt='Pocket Mechanic Logo' />
					</section>
				</main>
				<footer>
					<p>Cameron James Gaskill ©2021</p>
				</footer>
			</div>
		);
	}
}
