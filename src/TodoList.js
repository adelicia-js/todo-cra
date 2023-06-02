import { SlTrash } from "react-icons/sl";
const TodoList = ({ todoList, removeTodo }) => {
  return (
    <div className="input-list">
      {todoList?.length > 0 ? (
        <ul className="todo-list">
          {todoList.map((entry, index) => (
            <div className="todo">
              <li key={index}>{entry}</li>
              <button className="delete-button" onClick={()=>{removeTodo(entry)}}>
                <SlTrash size={20}/>
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Add some tasks! :)</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
