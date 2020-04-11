import React from "react";

const DetailList = ({ details }) => {
  return (
    <table className="ui basic table">
      <thead>
        <tr>
          <th className="ui basic table">Детализация</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        {details.map((detail) => (
          <tr key={detail.id}>
            <td>{detail.category}</td>
            <td>{detail.sum}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetailList;
