//import logo from './logo.svg';
import "../src/dist/styles.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LoginLanding from "./pages/LoginLanding";
import { useSelector } from "react-redux";

function PageNotFound() {
  return (
    <div>
      <p>404 Page not found</p>
    </div>
  );
}

function App() {
  const loggedIn = useSelector((state) => state.user.loggedin);

  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<LoginLanding />} />
        <Route path="/404" element={PageNotFound} />
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
