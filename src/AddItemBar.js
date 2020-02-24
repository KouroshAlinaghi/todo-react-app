import React from 'react';
import ItemLists from './ItemLists'
import Item from './Item'
import ToDo from './ToDo'
import ReactDOM from 'react-dom';

class AddItemBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.state = {
      inputValue: ''
    }
  }
  handleKeyDown(event) {
    if(event.keyCode === 13) { 
      this.props.onSubmit(this.state.inputValue)
    }
  }
  render() {
    return (
      <div className="input-group" >
        <input type="text" onChange={evt => this.updateInputValue(evt)} className="form-control" onKeyDown={this.handleKeyDown} />
        <button onClick={() => this.props.onSubmit(this.state.inputValue)} className="btn btn-primary ml-2">Add to list</button>
      </div>
    )
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    })
  }
}

export default AddItemBar
