import React from 'react';

export default class Noted extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isEditing : false
    };
  }
  render(){
   console.log(this.state.isEditing);
    if(!this.state.isEditing){
      return <div onClick = {this.edit}>{this.props.task}</div>;
  }
  return this.renderEdit();
  }
  
  edit = ()=>{
    this.setState({isEditing : true});
    
  };

  unEdit = (e) => {
    
    this.props.onEdit(e.target.value);
    
    this.setState({isEditing : false});
    
    };
    
  checkEnter = (e) =>{

      if(e.key === 'Enter'){
        this.unEdit(e);
      }
    }
  
    renderEdit = ()=> <input type = "text"
      
    autoFocus = {true}
    onBlur = {this.unEdit}
    onKeyPress = {this.checkEnter}
  />;
  

}

