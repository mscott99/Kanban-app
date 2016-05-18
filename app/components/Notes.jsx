import React from 'react';
import Note from './Noted';

export default function (props){

  return(
    <ul>{props.notes.map(note =>
      <li key = {note.id}>
        <Note task = {note.task}
          onEdit = {props.onEdit.bind(Window,note.id)}/>

      </li>
      )}</ul>

  );
      }
