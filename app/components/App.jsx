import React from 'react';
import Notes from './Notes';

import uuid from 'node-uuid';

export default class App extends React.Component{


  constructor(props){
    super(props);

    this.state = {
      notes: [
        { 
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id:uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task:'Do laundry'
        }]
    }
  }
  addNote = ()=>{
    this.setState({
      notes: this.state.notes.concat([{
        id:uuid.v4(),
        task: 'New task'
      }])

    });
  }

print = () =>{
  return this.state.notes.map((note) => <li key = {note.id}>{note.task}</li>);
}

  render(){
    /*
    const notes = this.state.notes;

    return(<div>
      <button onClick = {this.addNote}>
        Hello click
      </button>
        <Notes notes = {notes}/>
    </div>
    );
    */
    const notes = this.state.notes;
    return(<div>
      <button>
        click to add notes
      </button>
      
      
      <Notes notes = {notes}
      onEdit = {this.editNote}/>
        
    </div>);
  }
  editNote = function(id, task){
         const notes = this.state.notes.map(function(note){
     if(note.id === id ){
          note.task = task;
      }
      return note;
      });
     this.setState({notes});
  }
}
