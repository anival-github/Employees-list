/* eslint-disable react/prop-types */
import { React } from 'react';

const Employee = ({ employee, onRemove }) => (
  <li
    className="list-group-item employee"
  >
    {`${employee.first_name} ${employee.last_name}`}
    <button
      type="button"
      className="btn btn-outline-danger btn-sm"
      onClick={() => onRemove(employee.id)}
    >
      &times;
    </button>
  </li>
);

export default Employee;
