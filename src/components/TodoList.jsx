import '../static/TodoListDesign.css';
import TodoItem from './TodoItem.jsx';

const TodoList = ({ items, setItems, isEmpty, setIsEmpty }) => {

  // handle delete
  const handleDelete = (e) => {
    const index = e.target.id;
    const newItems = items.filter((item, i) => i !== parseInt(index));
    setItems(newItems);
    if (newItems.length === 0) {
      setIsEmpty(true);
    }
  };

  return (
    <>
      <div className='TodoList'>
        {items.map((item, index) => (
            <TodoItem item={item} index={index} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
