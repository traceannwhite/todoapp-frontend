import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
  const url = "https://todo-api-tw.herokuapp.com";

  //list of todoitems
  const [todo, setTodo] = useState([]);

  //empty to do item
  const emptyTodo = {
    item: "",
    notes: "",
    img: "",
    priority: "",
  };

  const [selectedItem, setSelectedItem] = useState(emptyTodo);

  // function for getting the to do list
  const getTodo = () => {
    fetch(url + "/todo")
      .then((response) => response.json())
      .then((data) => {
        setTodo(data);
      });
  };

  //initial fetching
  useEffect(() => getTodo(), []);

  const handleAddTodo = (newTodo) => {
    newTodo.priority = false;
    fetch(url + "/todo", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      getTodo();
    });
  };

  const handleEdit = (todoItem) => {
    fetch(url + "/todo/" + todoItem._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoItem),
    }).then(() => {
      getTodo();
    });
  };

  const selectTodoItem = (todoItem) => {
    setSelectedItem(todoItem);
  };

  const handleDelete = (todoItem) => {
    fetch(url + "/todo/" + todoItem._id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoItem),
    }).then(() => {
      getTodo();
    });
  };

  return (
    <div className="App">
      <Header>
        <NavBar />
      </Header>
      <hr />
      <main>
        <Link to="/add">
          <button>Add To Your To-Do List</button>
        </Link>
        <Switch>
          <Route
            exact
            path="/"
            render={(rp) => (
              <MainDisplay
                {...rp}
                todo={todo}
                selectTodoItem={selectTodoItem}
                handleDelete={handleDelete}
              />
            )}
          />
          <Route
            exact
            path="/add"
            render={(rp) => (
              <Form
                {...rp}
                label="Add to List"
                item={emptyTodo}
                handleSubmit={handleAddTodo}
              />
            )}
          />
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form
                {...rp}
                label="update"
                item={selectedItem}
                handleSubmit={handleEdit}
              />
            )}
          />
        </Switch>
      </main>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
