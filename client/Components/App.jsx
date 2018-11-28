import React from 'react';
import List from './List.jsx'

let temp = [];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      store: []
    }
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  
  handleSubmit() {
    temp.push(this.state.text);
    this.setState({
      store: temp
    })
  }

  handleEdit(j) {
    let editedTask = window.prompt('');
    this.state.store.splice(j, 1, editedTask)
    this.setState({
      text: ''
    })
  }

  handleText(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleDelete(i) {
    this.state.store.splice(i,1);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Hello from app</h1>
        <input type='text' onChange={this.handleText}></input>
        <button onClick={()=>{this.handleSubmit()}}>Submit</button>
        <List store={this.state.store} delete={this.handleDelete} edit={this.handleEdit}/>
      </div>
    )
  }
}

export default App;