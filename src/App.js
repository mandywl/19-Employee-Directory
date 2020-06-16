/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import ListEmployees from "./components/ListEmployees";
import SortEmployees from "./components/SortEmployees";
import employees from "./data.json";
import "./css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees,
      orderBy: "firstName",
      orderDir: "asc",
    };
    this.changeOrder = this.changeOrder.bind(this);
  }

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir,
    });
  }

  render() {
    let order;
    let filteredEmployees = this.state.employees;
    if (this.state.orderDir === "asc") {
      order = 1;
    } else {
      order = -1;
    }

    filteredEmployees = filteredEmployees.sort((a, b) => {
      if (
        a[this.state.orderBy].toLowerCase() <
        b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <SortEmployees
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                />
                <div className="employee-list item-list mb-3">
                  {filteredEmployees.map((employee) => (
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
