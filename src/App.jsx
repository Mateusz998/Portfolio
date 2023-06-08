import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default function App() {
	return (
		<div>
			<div className='page'>
				<Navbar />
				<Header />

				<Skills />
				<Projects />
			</div>
			<div className='gray--container' id='contact'>
				<div className='contact--continer'>
					<Contact />
					<Footer />
				</div>
			</div>
		</div>
	);
}
