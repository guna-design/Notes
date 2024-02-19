import "./App.css";
import Dashboard from "./Components/Dashboard";
import Edit from "./Components/Edit";

import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
           
              <Dashboard />
           
          }
        />
        <Route
          path="/Dashboard"
          element={
            
              <Dashboard />
         
          }
        />
        <Route
          path="/edit/:id"
          element={
           
              <Edit />
        
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
