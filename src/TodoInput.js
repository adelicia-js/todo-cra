import { MdAdd } from "react-icons/md";
const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="Let's get workin'..."
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      ></input>
      <button className="add-button" id="urmom" onClick={addTodo}>
        <MdAdd size={21}/>
      </button>
    </div>
  );
};

export default TodoInput;
