import React, { useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import CategorysList from "./components/CategorysList";
import DetailList from "./components/DetailList";

function App() {
  const [allCategorys, setCategorys] = useState([]);
  const [currentWorkout] = useState({
    category: "",
    sum: "",
  });

  const [details, setDetails] = useState([]);
  const [currentDetail] = useState({
    category: "",
    sum: "",
  });

  const handleAdd = (allCategorys) => {
    setCategorys((prevCategorys) => {
      for (let prevCategory of prevCategorys) {
        if (prevCategory && prevCategory.category === allCategorys.category) {
          prevCategory.sum =
            Number(prevCategory.sum) + Number(allCategorys.sum);
          return [...prevCategorys];
        }
      }

      return [...prevCategorys, allCategorys];
    });
  };

  const handleAddDetails = (detail) => {
    setDetails((prevDetails) => {
      prevDetails.reduce(function (accumulator, detail) {
        return accumulator + detail;
      }, 0);

      return [...prevDetails, detail];
    });
  };

  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AddForm
          setCategorys={setCategorys}
          setDetails={setDetails}
          handleAdd={handleAdd}
          handleAddDetails={handleAddDetails}
          currentWorkout={currentWorkout}
          currentDetail={currentDetail}
        />
        <CategorysList allCategorys={allCategorys} />
        <DetailList details={details} />
      </div>
    </div>
  );
}

export default App;
