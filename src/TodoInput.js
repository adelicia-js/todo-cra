import { SlPencil } from "react-icons/sl";
const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="Let's get workin'!"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      ></input>
      <button className="add-button" onClick={addTodo}>
        <SlPencil size={20}/>
      </button>
    </div>
  );
};

export default TodoInput;
