import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import dummyPage from "./pages/DummyPage";
import DummyPage from "./pages/DummyPage";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Navbar />
      <TodoList />
    </>
  );
}

export default App;
