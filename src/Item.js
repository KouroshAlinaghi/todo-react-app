import ItemLists from './ItemLists'
import AddItemBar from './AddItemBar'
import ToDo from './ToDo'
import React from 'react';
import ReactDOM from 'react-dom';

class Item extends React.Component {
  render() {
    let className = this.props.isDone ? "list-group-item list-group-item-success" : "list-group-item"
    return (
      <li className={className}>
        <h5 style={{display: "inline", color: "#444"}}>{this.props.text}</h5>
        <div className="btn-group" style={{float: "right"}}>
          <button onClick={() => this.props.makeDone(this.props.text)} className="btn btn-success btn-sm" style={{float: "right"}}>Mark as {this.props.isDone ? "Undone" : "Done"}</button>
          <button onClick={() => this.props.removeItem(this.props.text)} className="btn btn-danger btn-sm" style={{float: "right"}} >Remove todo</button>
        </div>
      </li>
    )
  }
}

export default Item
