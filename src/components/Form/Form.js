import React, { useState } from "react";

const Form = (props) => {
  const { item } = props;

  const [formData, setFormData] = useState(item);

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent form from refresh
    props.handleSubmit(formData); //submit to parent
    props.history.push("/"); //push back to main page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="item"
        placeholder="What's on your to-do list?"
        value={formData.item}
        onChange={handleChange}
      />
      <input
        type="text"
        name="notes"
        placeholder="Additional Notes"
        value={formData.notes}
        onChange={handleChange}
      />
      <input
        type="file"
        name="img"
        accept="image/png, image/jpeg, image/heic"
        value={formData.img}
        onChange={handleChange}
      />
      {/* <label>Priority task: </label> */}
      {/* <input type="checkbox" name="priority"/> */}
      <input type="submit" value={props.label} />
    </form>
  );
};

export default Form;
