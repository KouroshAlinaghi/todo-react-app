import Item from './Item'
import React from 'react';

function ItemLists(props) {
  return (
    <ul className="list-group mt-5">
      {props.todos.map((t, i) => (
        <Item text={t.text} key={i} removeItem={item => props.removeItem(item)} makeDone={text => props.makeDone(text)} isDone={t.isDone} setIsSelected={text => props.setIsSelected(text)} isSelected={t.isSelected}/>
      ))}
    </ul>
  )
}

export default ItemLists
