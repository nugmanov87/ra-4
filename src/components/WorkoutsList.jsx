import React from "react";

const WorkoutsList = ({ workouts, handleEdit, handleDelete }) => {
  return (
    <table className="ui basic table">
      <thead>
        <tr>
          <th>Суммарно по категориям</th>
          <th>Сумма</th>
          <th>Действия</th>
        </tr>
        <tr>
          <th>Детализация</th>
          <th>Сумма</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <React.Fragment>
        {workouts.map((workout) => (
          <tr key={workout.id}>
            <td>{workout.category}</td>
            <td>{workout.sum}</td>
            <td>
              <button onClick={() => handleEdit(workout.id)}>
                <i className="edit icon"></i>
              </button>
              <button onClick={() => handleDelete(workout.id)}>
                <i className="trash icon"></i>
              </button>
            </td>
          </tr>
        ))}
        {workouts.map((workout) => (
          <tr key={workout.id}>
            <td>{workout.category}</td>
            <td>{workout.sum}</td>
            <td>
              <button onClick={() => handleEdit(workout.id)}>
                <i className="edit icon"></i>
              </button>
              <button onClick={() => handleDelete(workout.id)}>
                <i className="trash icon"></i>
              </button>
            </td>
          </tr>
        ))}
        </React.Fragment>
      </tbody>
    </table>
  );
};

export default WorkoutsList;
