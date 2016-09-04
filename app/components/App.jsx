import React from 'React';

import uuid from 'uuid';
import Notes from './Notes';

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
];

export default () => {
	return (
		<div>
			<button onclick={() => console.log('add')}> + </button>
			<Notes notes={notes}/>
		</div>
	);
};