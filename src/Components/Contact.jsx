import React from 'react';

export default function Contact() {
	return (
		<div className='contact'>
			<div className='contact--text'>
				<h1>Contact</h1>
				<span>(Contact form without conected mailing)</span>
				<p>
					If you have any questions or would like to discuss potential collaboration opportunities, I am at
					your disposal. Please contact me using the form below or on social media.
				</p>
			</div>
			<form action='' className='form'>
				<input type='text' placeholder='Name' />
				<input type='email' placeholder='Email' id='email' />
				<textarea
					class='form__input'
					name='message'
					id='message'
					cols='30'
					rows='5'
					placeholder='MESSAGE'></textarea>
				<button className='submit'>SEND MESSAGE</button>
			</form>
		</div>
	);
}
