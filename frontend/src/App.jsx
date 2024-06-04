// src/App.js
import React from "react";
import "./App.css";
import FrontUI from "./components/FrontUI";
import LearningAssistant from "./components/Learningassistant";
import { Routes, Route } from "react-router-dom";
import Articlegenerator from "./components/Articlegenerator";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <FrontUI />
            </>
          }
        />
        <Route
          exact
          path="/quizapp"
          element={
            <>
              <LearningAssistant />
            </>
          }
        />
        <Route
          exact
          path="/articlegen"
          element={
            <>
              <Articlegenerator />
            </>
          }
        />
      </Routes>
     
    </div>
  );
}

export default App;
