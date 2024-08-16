import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Add from "./Add";
import Update from "./Update";

const Approuter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="add" element={<Add />} />
        <Route path="update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
};

export default Approuter;
