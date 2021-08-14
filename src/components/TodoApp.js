import React from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { v4 as uuid } from "uuid";
import axios from "axios";

class TodoApp extends React.Component {
  state = {
    todos: [],
  };
  handleCheckboxChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };
  addTodo = (title) => {
    const todoData = {
      id: uuid.v4(),
      title: title,
      completed: false,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", todoData)
      .then((response) => {
        console.log(response.data);
        this.setState({
          todos: [...this.state.todos, response.data],
        });
      });
  };
  componentDidMount() {
    // Tạo Get request để lấy danh sach todos
    // Cach 1
    // axios.get("https://jsonplaceholder.typicode.com/todos")
    // .then(response => console.log(response.data));

    // Cach 2

    const config = {
      params: {
        _limit: 5,
      },
    };
    axios
      .get("https://jsonplaceholder.typicode.com/todos", config)
      .then((response) => this.setState({ todos: response.data }));
  }

  render() {
    return (
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          handleChange={this.handleCheckboxChange}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}
export default TodoApp;
