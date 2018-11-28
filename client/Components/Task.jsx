import React from 'react';

let Task = (props) => (
  <div><ul><li>{props.task}<button onClick={()=>{props.delete(props.index)}}>Delete</button><button onClick={()=> {props.edit(props.index)}}>Edit</button></li></ul></div>
)
  
export default Task;