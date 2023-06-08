import React from 'react';

// .child-button:hover .parent-imf {
	// background: #000000;
	// 	opacity: 0.55;
// }
export default function Project(props) {
	return (
		<div>
			<div className='project--container'>
				<img src={[props.sideSS]} alt='' className='webpage' />
				<div className='project--img--button'>
					<button className='hover--button'>
						<a href={props.webside}>VIEW PROJECT</a>
					</button>
					<button className='hover--button'>
						<a href={props.code}>VIEW CODE</a>
					</button>
				</div>
			</div>
			<div className='project--bottom'>
				<p className='design'>{props.title}</p>
				<div className='techno'>
					<p>{props.technology1}</p>
					<p>{props.technology2}</p>
					<p>{props.technology3}</p>
				</div>
				<div className='project--button'>
					<button className='hover--button'>
						<a href={props.webside}>VIEW PROJECT</a>
					</button>
					<button className='hover--button'>
						<a href={props.code}>VIEW CODE</a>
					</button>
				</div>
			</div>
		</div>
	);
}
