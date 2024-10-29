import { useState } from "react";
import "../styles.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      alert("Please enter a valid todo.");
      return;
    }

    setTodos((todos) => {
      if (todos.map((t) => !t.trim())) {
        return todos.concat({
          id: Math.round(Math.random() * 100),
          title: inputValue,
        });
      }
    });

    setInputValue("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        placeholder="New todo"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      <ul className="todo-list">
        {todos.map(({ id, title }) => (
          <li className="todo" key={id}>
            <span>{title}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
