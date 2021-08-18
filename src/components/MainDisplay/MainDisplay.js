import React from "react";

const MainDisplay = (props) => {
  const { todo } = props;

  const loaded = () => (
    <div>
      <aside>Left: Some styling goes here.</aside>
      <article>
        {todo.map((item) => (
          <div key={item._id}>
            <h1>{item.item}</h1>
            <h2>{item.notes}</h2>
            <img src={item.img} alt="" />
            <button
              onClick={() => {
                props.selectTodoItem(item);
                props.history.push("/edit");
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                props.handleDelete(item);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </article>
    </div>
  );

  const loading = <h1>Loading...</h1>;

  return todo.length > 0 ? loaded() : loading;
};

export default MainDisplay;
