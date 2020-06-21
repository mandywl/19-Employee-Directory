/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import ListEmployees from "./components/ListEmployees";
import SortEmployees from "./components/SortEmployees";
import FilterEmployees from "./components/FilterEmployees";
import employees from "./data.json";
import "./css/App.css";
import { unique } from "jquery";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees:employees.sort((a, b) => a.firstName<b.firstName? -1 : 1),
      orderBy: "firstName",
      filterBy: "allDepartments",
      orderDir: "asc",
      departments: employees
        .map((category) => {
          console.log("category.department", category.department);
          return category.department;
        })
        .reduce(
          (unique, item) =>
            unique.includes(item) ? unique : [...unique, item],
          []
        ),
    };
    this.changeOrder = this.changeOrder.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }

  changeOrder(orderBy, dir) {
    let sortDirection;
    if (dir === "asc") {
      sortDirection = 1;
    } else {
      sortDirection = -1;
    }
    console.log("order is ", dir);
    this.setState({
      orderDir: dir,

      employees: this.state.employees.sort((a, b) => {
        if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
          return -1 * sortDirection;
        } else {
          return 1 * sortDirection;
        }
      }),
    });
  }

  changeFilter(filterCategory) {
    this.setState({
      filterBy: filterCategory,
    });
  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <div className="sort-employees justify-content-center row my-4">
                  <FilterEmployees
                    filterBy={this.state.filterBy}
                    departments={this.state.departments}
                    changeFilter={this.changeFilter}
                  />
                  <SortEmployees
                    orderBy={this.state.orderBy}
                    orderDir={this.state.orderDir}
                    changeOrder={this.changeOrder}
                  />
                </div>
                <div className="employee-list item-list mb-3">
                  {employees
                    .map((employee) =>
                      employee.department === this.state.filterBy ||
                      this.state.filterBy === "allDepartments" ? (
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
                        ) : null
                    )}
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
