import React from "react";
// import Paper from "../Paper/Paper";

const MainDisplay = (props) => {
  const { todo } = props;

  const loaded = () => (
    <div>
      <article className="item-card">
        {todo.map((item) => (
          <div key={item._id}>
            <h1 className="todo-item">{item.item}</h1>
            <p className="notes">{item.notes}</p>
            <img src={item.img} alt="" />
            <div className="task-btns">
              <button
                className="edit"
                onClick={() => {
                  props.selectTodoItem(item);
                  props.history.push("/edit");
                }}
              >
                Edit
              </button>
              <button
                className="delete"
                onClick={() => {
                  props.handleDelete(item);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </article>
    </div>
  );

  const loading = <h1>Loading...</h1>;

  return todo.length > 0 ? loaded() : loading;
};

export default MainDisplay;
