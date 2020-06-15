/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import ListEmployees from "./components/ListEmployees";
import employees from "./data.json";
import "./css/App.css";

class App extends Component {
  state = {
    employees,
  };

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <div className="employee-list item-list mb-3">
                  {this.state.employees.map((employee) => (
                    <ListEmployees
                      id={employee.id}
                      key={employee.id}
                      firstName={employee.firstName}
                      surname={employee.surname}
                      position={employee.position}
                      department={employee.department}
                      phone={employee.phone}
                      mobile={employee.mobile}
                      building={employee.building}
                      email={employee.email}
                      location={employee.location}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
