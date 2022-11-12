import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/home";
import Navbar from "./components/navbar";
import Login from "./page/login";
import AddProject from "./page/add";
import { useContext } from "react";
import { AuthContext } from "./context/authcontext";
import ProjectDetail from "./components/projectdetails";
import Search from "./page/search";

function App() {
  const { user, authIsready } = useContext(AuthContext);
  return (
    <div className="">
      {authIsready && (
        <BrowserRouter>
          <div className="max-w-6xl mx-auto">
            <Navbar />

            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/add"
                element={user ? <AddProject /> : <Navigate to="/login" />}
              />
              <Route
                path="/search"
                element={user ? <Search /> : <Navigate to="/login" />}
              />
              <Route
                path="/project/:id"
                element={user ? <ProjectDetail /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
