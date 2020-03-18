import React from 'react';

function Item(props) {
  let className = props.isDone ? "list-group-item list-group-item-success" : "list-group-item"
  let styles = props.isSelected ? {overflow: 'hidden', 'text-overflow': 'ellipsis', 'border-left': '4px solid #324484'} : {overflow: 'hidden', 'text-overflow': 'ellipsis'}
  return (
    <li className={className} style={styles}>
      <h5 style={{display: "inline", color: "#444"}}>{props.text}</h5>
      <div className="btn-group" style={{float: "right"}}>
        <button onClick={() => props.makeDone(props.text)} className="btn btn-success btn-sm" style={{float: "right"}}>Mark as {props.isDone ? "Undone" : "Done"}</button>
        <button onClick={() => props.removeItem(props.text)} className="btn btn-danger btn-sm" style={{float: "right"}} >Remove todo</button>
        <button onClick={() => props.setIsSelected(props.text)} className="btn btn-primary btn-sm">Select</button>
      </div>
    </li>
  )
}

export default Item
