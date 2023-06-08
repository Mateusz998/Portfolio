import React from 'react';

export default function Header() {
	return (
		<header className='header'>
			<div className='section--text'>
				<h1 className='text'>
					Nice to meet you! <br></br>
					I'm <span className='name'>Mateusz </span>
				</h1>
				<div className='description'>
					<p>
						I am a person who is passionate about learning programming. My motivation is the desire to
						create new, innovative solutions that will help people in their daily lives. I love challenges
						and solving problems that arise during project development. I strive to constantly develop my
						skills and expand my knowledge of new technologies.
					</p>
					<button className='button'>
						<a href='#contact'>CONTACT ME</a>
					</button>
				</div>
			</div>
			<div className='image'>
				<img src='../image-profile.jpeg' className='photo' />
			</div>
		</header>
	);
}
