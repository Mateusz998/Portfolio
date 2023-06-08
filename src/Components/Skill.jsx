import React from 'react';

export default function Skill(props) {
	return (
		<div>
			<h2 className='skill'>{props.skill}</h2>
			<p className='experience'>Experience: {props.experience}</p>
		</div>
	);
}
