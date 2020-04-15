import React, { useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import CategorysList from "./components/CategorysList";
import DetailList from "./components/DetailList";

function App() {
  const [details, allCategorys, setDetails] = useState([]);
  const [currentDetail] = useState({
    category: "",
    sum: "",
  });

  const handleAddDetails = (details, allCategorys) => {
    setDetails((prevDetails) => {
      if (prevDetails && prevDetails.category === details.category) {
        allCategorys.reduce(function (accumulator, details) {
          return accumulator + details;
        }, 0);
      }

      return [...allCategorys, details];
    });
  };

  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AddForm
          setDetails={setDetails}
          handleAddDetails={handleAddDetails}
          currentDetail={currentDetail}
        />
        <CategorysList allCategorys={allCategorys} />
        <DetailList details={details} />
      </div>
    </div>
  );
}

export default App;
