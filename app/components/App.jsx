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
				<Notes 
					notes={notes} 
					onDelete={this.onDelete} 
					activeEditNote={this.activeEditNote}
					editNote={this.editNote}
				/>
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
	}

	onDelete = (id, e) => {
		e.stopPropagation();
		const notes = this.state.notes.filter(note => note.id !== id);
		this.setState({
			notes: notes
		})
	}

	activeEditNote = (id, e) => {
		this.setState({
			notes: this.state.notes.map((note) => {
				if(note.id == id) {
					note.editing = true;
				}
				return note;
			})
		})
	}

	editNote = (id, task, e) => {
		this.setState({
			notes: this.state.notes.map((note) => {
				if(note.id == id) {
					note.editing = false;
					note.task = task;
				}
				return note;
			})
		})
	}


}

