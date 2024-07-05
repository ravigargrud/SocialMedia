import React from 'react';
import '../static/TodoListDesign.css';

const ListItems = ({ items, setItems }) => {

  // handle on click for btn
  const handleAdd = () => {
    const newDrink = document.getElementById('drink').value;
    setItems([...items, newDrink]);
    // clear input
    document.getElementById('drink').value = '';
  };

  // handle delete
  const handleDelete = (e) => {
    const index = e.target.id;
    const newItems = items.filter((item, i) => i !== parseInt(index));
    setItems(newItems);
  };

  return (
    <>
      <div className='TodoList'>
        {items.map((item, index) => (
            <div className='TodoItem' key={index}>
            <p>{index + 1}. {item}</p>
            <button id={index} onClick={handleDelete}>Delete</button>
            </div>
        ))}
      </div>
        <div className='TodoItemAdd'>
            <input id="drink" type="text" />
            <button onClick={handleAdd}>Add</button>
        </div>
    </>
  );
};

export default TodoList;
