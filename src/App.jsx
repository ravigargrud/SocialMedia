import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList.jsx';
import TodoItemAdd from './components/TodoItemAdd.jsx';

function App() {
  const [items, setItems] = useState(["Chai", "Coffee", "Herbal Tea"]);
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <>
      <h1>Todo App</h1>
      <div className='Todos'>
      {!isEmpty? <TodoList items={items} setItems={setItems} isEmpty={isEmpty} setIsEmpty={setIsEmpty}/> : <h2>No items</h2>}
      </div>
      <TodoItemAdd items={items} setItems={setItems} setIsEmpty={setIsEmpty}/>
    </>
  );
}

export default App;
