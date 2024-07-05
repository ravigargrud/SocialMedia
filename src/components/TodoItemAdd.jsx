import '../static/TodoListDesign.css'

const TodoItemAdd = ({items, setItems, setIsEmpty}) => {
    const handleAdd = () => {
        const newDrink = document.getElementById('drink').value;
        setItems([...items, newDrink]);
        // clear input
        document.getElementById('drink').value = '';
        setIsEmpty(false);
    };

  return (
    <div className='TodoItemAdd'>
      <input id="drink" type="text" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoItemAdd;