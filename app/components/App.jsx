import React from 'React';

import uuid from 'uuid';
import Notes from './Notes';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: [
			  {
			    id: uuid.v4(),
			    task: 'Learn React'
			  },
			  {
			    id: uuid.v4(),
			    task: 'Do laundry'
			  }
			]		
		};

	}

	render () {
		const {notes} = this.state;

		return (
			<div>
				<button onClick={this.addNote}> + </button>
				<Notes notes={notes} onDelete={this.onDelete} />
			</div>
		);
	}

	addNote = () => {
		this.setState(
			{
				notes: this.state.notes.concat([{
					id: uuid.v4(),
					task: 'New Task'
				}])
			}
		);
	};

	onDelete = (id, e) => {
		e.stopPropagation();
		const notes = this.state.notes.filter(note => note.id !== id);
		this.setState({
			notes: notes
		});
	};

}

