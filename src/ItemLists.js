import Item from './Item'
import AddItemBar from './AddItemBar'
import ToDo from './ToDo'
import React from 'react';
import ReactDOM from 'react-dom';

class ItemLists extends React.Component {
  render() {
    return (
      <ul className="list-group mt-5">
        {this.props.todos.map((t, i) => (
          <Item text={t.text} key={i} removeItem={item => this.props.removeItem(item)} makeDone={text => this.props.makeDone(text)} isDone={t.isDone} />
        ))}
      </ul>
    )
  }
}

export default ItemLists
