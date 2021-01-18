/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Employees from './components/Employees';
import Main from './components/Main';

const api = 'https://reqres.in/api/users?per_page=12';

function App() {
  const [employeesList, setEmployeesList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api);
      const result = await response.json();
      setEmployeesList(result.data);
    };

    fetchData();
  }, []);

  const [newEmployee, setNewEmployee] = useState('');

  const addEmployee = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    const [name, surname] = newEmployee.trim().split(' ');

    setEmployeesList([
      ...employeesList,
      {
        id: Date.now(),
        first_name: name,
        last_name: surname,
      },
    ]);

    setNewEmployee('');
  };

  const removeEmployee = (employeeId) => {
    setEmployeesList(employeesList.filter((person) => person.id !== employeeId));
  };

  return (
    <div className="container">
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route
              path="/"
              component={Main}
              exact
            />
            <Route
              path="/employees"
              render={(props) => (
                <Employees
                  {...props}
                  employeesData={employeesList}
                  newEmployee={newEmployee}
                  setNewEmployee={setNewEmployee}
                  addEmployee={addEmployee}
                  onRemove={removeEmployee}
                />
              )}
              exact
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
