import React from 'react';
import ReactDOM from 'react-dom';
import ItemLists from './ItemLists'
import Item from './Item'
import AddItemBar from './AddItemBar'

class ToDo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  addTodo(newtodotext) {
    if (!this.state.todos.includes(newtodotext) && newtodotext != '') {
      this.setState({todos: [...this.state.todos, newtodotext ]})
      document.querySelector("input").value = ''
      document.querySelector("#danger-card").style.display = "none"
    } else {
      document.querySelector("#danger-card").style.display = "block"
    }
  }
  removeItem(item) {
    this.setState({todos: this.state.todos.filter(i => i !== item)})
  }
  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <AddItemBar onSubmit={t => this.addTodo(t)} className="card m-5" />
        {this.state.todos.length !== 0 &&
          <ItemLists todos={this.state.todos} removeItem={item => this.removeItem(item)} />
        }
        <button className="btn btn-danger mt-5" onClick={() => this.removeAll()}>Remove All</button>
        <h6 className="mt-2">{this.state.todos.length} total todos</h6>
      </div>
    )
  }
  removeAll() {
    this.setState({todos: []})
  }
}

export default ToDo

