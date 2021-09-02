import React from "react";

const DragAndDrop = (props) => {
  const handleDragStart = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleDragMove = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <div className={"drag-and-drop"}>
      onDragStart = {(event) => handleDragStart(event)}
      onDragLeave={(event) => handleDragLeave(event)}
      onDragMove = {(event) => handleDragMove(event)}
      onDragDrop = {(event) => handleDragDrop(event)}
    </div>
  );
};

export default DragAndDrop;
