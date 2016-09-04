import React from 'react';
import Note from './Note';
import Editable from './Editable';

export default ({notes, onDelete=() => {}, activeEditNote=() => {}, editNote=() => {}}) => {
	return (
    <ul>
    {notes.map( ({id, editing, task}) => 
      <li key={id} >
        <Note>
          <Editable
            editing = {editing}
            value = {task}
            onEdit = {editNote.bind(null, id)}
          />
          <button onClick={onDelete.bind(null, id)}>X</button>
          <button onClick={activeEditNote.bind(null, id)}>E</button>
        </Note>
      </li>)
    }
    </ul>
  );
};

