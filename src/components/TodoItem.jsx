import "../static/TodoListDesign.css";

const TodoItem = ({ item, index, handleDelete }) => {
    return (
        <div className="TodoItem">
        <p>
            {index + 1}. {item}
        </p>
        <button id={index} onClick={handleDelete}>
            Delete
        </button>
        </div>
    );
    }


export default TodoItem;