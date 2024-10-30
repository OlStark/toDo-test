import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import styles from './index.module.css';

export const LoginPage: React.FC = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(login({ username, password }));
    navigate("/");
  };

  return (
    <div className={styles.login_form}>
      <div className={styles.input_wrapper}>
        <input
          type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
        />
        <input
          type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        />
      </div>
      
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};