import React from "react";
import "./PropertyList.css";

const PropertiesList = ({ detail, setDetails }) => {
  const handleDelete = (id) => {
    setDetails(
      detail.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div className="list-container">
      <h1 className="heading">List of Properties</h1>
      {detail.length === 0 && (
        <h1 className="no-list-heading">No Property details to show...</h1>
      )}

      {detail.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Property Size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {detail.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.size}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PropertiesList;
