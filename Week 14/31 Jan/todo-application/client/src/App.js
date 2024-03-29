import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Segment, Checkbox } from "semantic-ui-react";
// import ToDoComponent from "./components/ToDoComponent";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = async () => {
    const response = await axios.get("http://localhost:3001/todos");
    setTodos(response.data);
  };

  const updateTodo = async (todoId) => {
    const response = await axios.patch(
      "http://localhost:3001/todos/edit/" + todoId
    );
    if (response.status == "200") {
      const updatedTodos = todos.map((todo) => {
        if (todo._id === todoId) {
          todo.completed = response.data.completed;
        }
        return todo;
      });
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="container">
      <Container style={{ marginTop: "5rem" }}>
        {todos.map((todo) => (
          <Segment
            raised
            key={todo._id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span className={todo.completed ? "completed" : "not-completed"}>
              {todo.description}
            </span>{" "}
            <span>
              <Checkbox
                toggle
                checked={todo.completed}
                onClick={() => updateTodo(todo._id)}
              />
              {/* <Icon name="delete" /> */}
            </span>
          </Segment>
        ))}
      </Container>
    </div>
  );
}

export default App;
