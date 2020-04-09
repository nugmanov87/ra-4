import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import WorkoutModel from "../model/WorkoutModel";
import shortid from "shortid";

const AddForm = ({ currentWorkout, handleAdd }) => {
  const [form, setForm] = useState({ category: "", sum: "" });

  useEffect(() => {
    if (currentWorkout) {
      setForm({ category: currentWorkout.category, sum: currentWorkout.sum });
    }
  }, [currentWorkout]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const workout = new WorkoutModel(
      shortid.generate(),
      form.category,
      form.sum
    );
    handleAdd(workout);
    setForm({ category: "", sum: "" });
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="two fields">
        <div className="field">
          <label htmlFor="category">Категория</label>
          <div className="ui input left icon">
            <input
              type="text"
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="sum">Сумма</label>
          <input
            type="number"
            step="any"
            name="sum"
            id="sum"
            value={form.sum}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button className="ui green button" type="submit">
        Добавить
      </button>
    </form>
  );
};

AddForm.propTypes = {
  setWorkouts: PropTypes.func.isRequired,
};

export default AddForm;
