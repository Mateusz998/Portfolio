import React from 'react';

export default function Footer() {
	return (
		<nav className='footer'>
			<div className='title-name'>
				<h3>Mateusz</h3>
			</div>
			<link
				href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
				rel='stylesheet'
				integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
				crossorigin='anonymous'></link>
			<div className='links'>
				<ul>
					<li class='twitter'>
						<a href='https://twitter.com/'>
							<i class='fa fa-twitter fa-2x' aria-hidden='true'></i>
						</a>
					</li>
					<li class='instagram'>
						<a href='https://instagram.com/qciakk?igshid=OGQ5ZDc2ODk2ZA=='>
							<i class='fa fa-instagram fa-2x' aria-hidden='true'></i>
						</a>
					</li>
					<li class='github'>
						<a href='https://github.com/Mateusz998'>
							<i class='fa fa-github fa-2x' aria-hidden='true'></i>
						</a>
					</li>
					<li class='linkedin'>
						<a href='https://www.linkedin.com/in/mateusz-kurowski-651b99230/'>
							<i class='fa fa-linkedin fa-2x' aria-hidden='true'></i>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
