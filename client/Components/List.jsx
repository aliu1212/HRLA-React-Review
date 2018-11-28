import React from 'react';
import Task from './Task.jsx';

let List = (props) => (
  <div>
    {props.store.map((task, i)=> <Task task={task} delete={props.delete} index={i} edit={props.edit}/>)}
  </div>
)

export default List;