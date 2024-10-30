import  React from "react";
import { useDispatch } from "react-redux";
import {
  toggleComplete,
  deleteTodo,
  restoreTodo,
  permanentlyDeleteTodo,
} from "../features/todoSlice";

import styles from './todoItem.module.css';


interface TodoItemProps {
    todo: {
      id: string;
      text: string;
      completed: boolean;
      deleted: boolean;
    };
}

 export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useDispatch();

    const handleToggleComplete = () => dispatch(toggleComplete(todo.id));
    const handleDelete = () => dispatch(deleteTodo(todo.id));
    const handleRestore = () => dispatch(restoreTodo(todo.id));
    const handlePermanentlyDelete = () => dispatch(permanentlyDeleteTodo(todo.id));

    return(
        <li className={styles.todo_item}>
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
        <div className={styles.todo__buttons}>
          {todo.deleted ? (
            <>
              <button className={styles.return_task_btn} onClick={handleRestore} />
              <button className={styles.permanently_delete_todo} onClick={handlePermanentlyDelete} />
            </>
          ) : (
            <>
              <label className={styles.custom_checkbox}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={handleToggleComplete}
                  className={styles.task_complete}
                />
                <span className={styles.checkbox_icon} />
              </label>
              <button className={styles.trash_btn} onClick={handleDelete} />
            </>
          )}
        </div>
      </li>
    );
};