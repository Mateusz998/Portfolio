import React from 'react';
import Project from './Project';
import '../index.css';

export default function Projects() {
	return (
		<div className='projects'>
			<div className='projects--top'>
				<h1>Projects</h1>

				<button>
					<a href='#contact'>CONTACT ME</a>
				</button>
			</div>
			<span>(Sample projects. In the future, my own works will be here.)</span>
			<div className='portfolio'>
				<Project
					sideSS='../thumbnail-project-1-small.webp'
					title='DESIGN PORTFOLIO'
					technology1='HTML'
					technology2='CSS'
					webside='#'
					code='#'
				/>
				<Project
					sideSS='../thumbnail-project-2-small.webp'
					title='E-LEARNING LANDING PAGE'
					technology1='HTML'
					technology2='CSS'
					webside='#'
					code='#'
				/>
				<Project
					sideSS='../thumbnail-project-3-small.webp'
					title='TODO WEB APP'
					technology1='HTML'
					technology2='CSS'
					technology3='JAVASCRIPT'
					webside='#'
					code='#'
				/>
				<Project
					sideSS='../thumbnail-project-4-small.webp'
					title='ENTERTAINMENT WEB APP'
					technology1='HTML'
					technology2='CSS'
					technology3='JAVASCRIPT'
					webside='#'
					code='#'
				/>
				<Project
					sideSS='../thumbnail-project-5-small.webp'
					title='MEMORY GAME'
					technology1='HTML'
					technology2='CSS'
					technology3='JAVASCRIPT'
					webside='#'
					code='#'
				/>
				<Project
					sideSS='../thumbnail-project-6-small.webp'
					title='ART GALLERY SHOWCASE'
					technology1='HTML'
					technology2='CSS'
					technology3='JAVASCRIPT'
					webside='#'
					code='#'
				/>
			</div>
		</div>
	);
}
