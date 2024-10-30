import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { TodoPage } from "./pages/TodoPage";
import { LoginPage } from "./pages/LoginPage";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={isAuth ? <TodoPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;