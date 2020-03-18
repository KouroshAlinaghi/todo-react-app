import React from 'react';
import ItemLists from './ItemLists'
import AddItemBar from './AddItemBar'

class ToDo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  addTodo(newtodotext) {
    if (!this.state.todos.filter(obj => obj.text == newtodotext).length == 1 && newtodotext.replace(/\s/g, '').length) {
      this.setState({todos: [...this.state.todos, {text: newtodotext, isDone: false} ]})
      document.querySelector("input").value = ''
      document.querySelector("#alert").style.display = "none"
    } else {
      document.querySelector("#alert").style.display = "block"
    }
  }
  removeItem(text) {
    this.setState({todos: this.state.todos.filter(obj => obj.text !== text)})
  }
  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <AddItemBar onSubmit={text => this.addTodo(text)} className="card m-5" />
        {this.state.todos.length !== 0 &&
          <ItemLists todos={this.state.todos} removeItem={item => this.removeItem(item)} makeDone={text => this.makeDone(text)} setIsSelected={text => this.setIsSelected(text)}/>
        }
        <button className="btn btn-danger mt-5" onClick={() => this.removeAll()}>Remove All</button><br />
        <button className="btn btn-danger mt-2" onClick={() => this.removeSelectedTodos()}>Remove Selected Todos</button><br />
        <button className="btn btn-primary mt-2" onClick={() => this.makeDoneOrUndone()}>Make Selected Todos Done/Undone</button><br />
        <h6 className="mt-2">{this.state.todos.length} total todos</h6>
      </div>
    )
  }
  makeDoneOrUndone() {
    let clonedTodos = [...this.state.todos]
    for (let i in clonedTodos) {
      if (clonedTodos[i].isSelected) clonedTodos[i].isDone = !clonedTodos[i].isDone
    }
    this.setState({todos: clonedTodos})
  }
  setIsSelected(text) {
    const { todos } = this.state,
    index = todos.findIndex(todo => todo.text === text),
    clonedTodos = [...todos];
    clonedTodos[index].isSelected = !clonedTodos[index].isSelected;
    this.setState({ todos: clonedTodos });
  }
  makeDone(text) {
    const { todos } = this.state,
    index = todos.findIndex(todo => todo.text === text),
    clonedTodos = [...todos];
    clonedTodos[index].isDone = !clonedTodos[index].isDone;
    this.setState({ todos: clonedTodos });
  }
  removeSelectedTodos() {
    this.setState({todos: this.state.todos.filter(todo => !todo.isSelected)})
  }
  removeAll() {
    this.setState({todos: []});
  }
}

export default ToDo

