import React, { useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import WorkoutsList from './components/WorkoutsList';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [currentWorkout, setCurrentWorkout] = useState({
    category: '',
    sum: '',
  });

 

  const handleAdd = workout => {
    setWorkouts(prevWorkouts => {
      for (let prevWorkout of prevWorkouts) {
        if (prevWorkout && prevWorkout.category === workout.category) {
          prevWorkout.sum =
            Number(prevWorkout.sum) + Number(workout.sum);
          return [...prevWorkouts];
        }
      }
      return [...prevWorkouts, workout];
    });
  };

  const handleDelete = id => {
    setWorkouts(prevWorkouts =>
      prevWorkouts.filter(workout => workout.id !== id),
    );
  };

  const handleEdit = id => {
    const workout = workouts.find(item => item.id === id);
    setCurrentWorkout({
      category: workout.category,
      sum: workout.sum,
    });
    handleDelete(workout.id);
  };

  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AddForm
          setWorkouts={setWorkouts}
          handleAdd={handleAdd}
          currentWorkout={currentWorkout}
        />
        <WorkoutsList
          workouts={workouts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;