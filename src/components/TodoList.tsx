import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { TodoItem } from "./TodoItem";
import { TodoInput } from "./TodoInputs";

import styles from './index.module.css';

export const TodoList: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "current" | "completed" | "deleted">("all");
  const todos = useSelector((state: RootState) => state.todos.todos);
 
  const filteredTodos = todos.filter((todo) => {
    if (filter === "current") return !todo.completed && !todo.deleted;
    if (filter === "completed") return todo.completed && !todo.deleted;
    if (filter === "deleted") return todo.deleted;
    return !todo.deleted;
  });

  const counts = {
    all: todos.filter(todo => !todo.deleted).length,
    current: todos.filter(todo => !todo.completed && !todo.deleted).length,
    completed: todos.filter(todo => todo.completed && !todo.deleted).length,
    deleted: todos.filter(todo => todo.deleted).length,
  };

  const chapters = [
    {name: "все", key: 'all'},
    {name:"текущие", key: 'current'},
    {name:"выполненные", key: "completed"},
    {name:"корзина", key: "deleted"}
  ];

  const chaptersRender = (chapters: Array<{ name: string; key: string}>): React.ReactNode => {
    return (
      <>
        {
          chapters.map((item) => (
              <button
              key={item.key}
              onClick={() => setFilter(item.key as "all" | "current" | "completed" | "deleted")}
              className={styles.filters_btn}
            >
              {item.name.toUpperCase()} {counts[item.key as keyof typeof counts] > 0 && `(${counts[item.key as keyof typeof counts]})`}
            </button> 
          ))
        }
      </>
    )
  }
  
  return (
    <div className={styles.todo_page}>
      <h2 className={styles.todo__actual_chapter}>{filter.toUpperCase()}</h2>

      <TodoInput/>

      <div className={styles.filters_and_list}>
        <div className={styles.todo__filters}>
          {chaptersRender(chapters)}
        </div>

        <ul className={styles.todo_list}>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>
          ))}
        </ul>
      </div>
    </div>
  );
};