import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleTask from "./SingleTask";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [listValue, setListValue] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos) {
      setListValue(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(listValue));
  }, [listValue]);

  const pushListValue = () => {
    // localStorage.removeItem("todos");

    setListValue([
      { id: Date.now(), title: inputValue, done: false },
      ...listValue,
    ]);
    setInputValue("");
  };

  const doneHandler = (todoId) => {
    const index = listValue.findIndex((emp) => emp.id === todoId);

    const newTodo = [...listValue];

    newTodo[index] = {
      id: listValue[index].id,
      title: listValue[index].title,
      done: !listValue[index].done,
    };
    setListValue(newTodo);
  };

  const delHandler = (todoId) => {
    if (window.confirm("Are you sure ? ")) {
      const updatedList = listValue.filter((item) => item.id !== todoId);
      setListValue(updatedList);
    }
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="list your task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input_box"
        />
        <Button variant="outlined" onClick={pushListValue}>
          {" "}
          Add Task
        </Button>
      </div>
      <div style={{ height: "50vh", position: "relative", left: "25%" }}>
        {listValue.map((v, i) => {
          return (
            <SingleTask
              i={i}
              v={v}
              doneHandler={doneHandler}
              delHandler={delHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
