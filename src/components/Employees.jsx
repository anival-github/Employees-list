/* eslint-disable react/prop-types */
import { React } from 'react';
import Employee from './Employee';

export default function Employees({
  employeesData,
  newEmployee,
  setNewEmployee,
  addEmployee,
  onRemove,
}) {
  return (
    <div>
      <ul className="list-group">
        {employeesData && employeesData
          .map((employee) => (
            <Employee
              key={employee.id}
              onRemove={onRemove}
              employee={employee}
            />
          ))}
      </ul>
      <hr />
      <label htmlFor="input-field">
        Enter new employee:
        <input
          id="input-field"
          className="input-field"
          type="text"
          placeholder="Name Surname"
          value={newEmployee}
          onChange={(event) => setNewEmployee(event.target.value)}
          onKeyPress={addEmployee}
        />
      </label>
    </div>
  );
}
