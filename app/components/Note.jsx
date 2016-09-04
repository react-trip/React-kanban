import React from 'React';

export default ({task, onDelete}) => {
	return (
		<div>
			<span>{task}</span>
			<button onClick={onDelete}></button>			
		</div>
	);
};