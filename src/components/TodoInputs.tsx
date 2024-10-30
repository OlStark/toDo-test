import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clearTodos } from "../features/todoSlice";

import styles from './index.module.css';

export const TodoInput: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const handleClearTodos = () => dispatch(clearTodos());

  return (
    <div className={styles.todo__inputs}>
      <button onClick={handleAddTodo} className={styles.todo_add}>ДОБАВИТЬ</button>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Пополните список..."
        className={styles.todo__input}
      />
      <button onClick={handleClearTodos} className={styles.todo_delete}>УДАЛИТЬ</button>
    </div>
  );
};