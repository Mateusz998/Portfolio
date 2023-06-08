import React from 'react';
import Skill from './Skill';
export default function Skills() {
	return (
		<div className='skills'>
			<Skill 
			skill='HTML'
			experience="6 months"/>
			<Skill 
			skill='CSS'
			experience="6 months"/>
			<Skill 
			skill='JS'
			experience="5 months"/>
			<Skill 
			skill='REACT'
			experience="2 months"/>
			<Skill 
			skill='GIT'
			experience="1 month"/>
		</div>
	);
}
