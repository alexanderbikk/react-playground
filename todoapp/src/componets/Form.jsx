import styles from "./form.module.css";
import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name: "", done: false});
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name: "", done: false});
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.input_container}>
        <input
          className={styles.modern_input}
          value={todo.name}
          type="text"
          onChange={(e) => setTodo({name: e.target.value, done : false})}
          placeholder="Enter todo item"
        />
        <button className={styles.modern_button} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
