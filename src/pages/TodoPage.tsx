import React from "react";
import { TodoList } from "../components/TodoList";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/authSlice";
import styles from './index.module.css';

export const TodoPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={styles.todo_wrapper}>
      <button onClick={handleSubmit} className={styles.logout_btn}>Logout</button>
      <h1 className={styles.todo_page__title}>Мои задачи</h1>
      <TodoList />
    </div>
  );
};