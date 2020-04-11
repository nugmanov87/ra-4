import React from "react";

const CategorysList = ({ allCategorys}) => {
  return (
    <table className="ui basic table">
      <thead>
        <tr>
          <th className="ui basic table">Суммарно по категориям</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        {allCategorys.map((allCategory) => (
          <tr key={allCategory.id}>
            <td>{allCategory.category}</td>
            <td>{allCategory.sum}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategorysList;
