import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CategoryModel from "../model/CategoryModel";
import shortid from "shortid";

const AddForm = ({ currentCategory, handleAdd, handleAddDetails }) => {
  const [form, setForm] = useState({ category: "", sum: "" });

  useEffect(() => {
    if (currentCategory) {
      setForm({ category: currentCategory.category, sum: currentCategory.sum });
    }
  }, [currentCategory]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const categorys = new CategoryModel(
      shortid.generate(),
      form.category,
      form.sum
    );
    handleAdd(categorys);
    handleAddDetails(categorys);

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
  setCategorys: PropTypes.func.isRequired,
};

export default AddForm;
