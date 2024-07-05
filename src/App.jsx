import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList.jsx';

function App() {
  const [items, setItems] = useState(["Chai", "Coffee", "Herbal Tea"]);

  return (
    <>
      <h1>Todo App</h1>
      <div className='Todos'>
      <TodoList items={items} setItems={setItems} />
      </div>
    </>
  );
}

export default App;
