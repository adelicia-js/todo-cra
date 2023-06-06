// Very first React project :D

import "./App.css";
import { useState } from "react";
// useState is a React hook that takes a state's initial value and returns an array with 2 values,
// i.e., a getter and setter function
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Footer from "./Footer";

function App() {
  // Create a todo
  const [todo, setTodo] = useState("");
  // Getter function: todo -> displays current state
  // In this case, initial value is undefined, i.e., ""
  // Setter function: setTodo -> sets/updates state

  // Add a todo
  const [todos, setTodos] = useState([]);
  // Getter function: todos -> empty array (todos are pushed to it)
  // Setter function: setTodos -> updates todos array using addTodo()

  // Function to add todo to array
  const addTodo = () => {
    if (todo !== "") {
      // Ensures that input isn't empty
      setTodos([...todos, todo]);
      setTodo(""); // Clears input after todo is pushed to array
    }
  };
  // todo is pushed to todos (a copy of todos using ... operator)

  const deleteTodo = (task) => {
    const newTodos = todos.filter((todo) => {
      return todo !== task;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Make a To-Do List!</h1>
      <div className="Content">
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList todoList={todos} removeTodo={deleteTodo} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
