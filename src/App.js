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
      employees,
      orderBy: "firstName",
      filterBy: "allDepartments",
      orderDir: "asc",
      departments: [],
    };
    this.changeOrder = this.changeOrder.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }

  // componentDidMount() {
  //   this.state.employees.map((category) => {
  //     this.setState({ departments: category.department });
  //     return category.department;
  //   });
  // }

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir,
    });
  }

  changeFilter(filterCategory) {
    this.setState({
      filterBy: filterCategory,
    });
  }

  render() {
    console.log("this.props.departments", this.state.departments);
    let order;
    let filteredEmployees;
    let filteredDepartments = this.state.employees
      .map((category) => {
        console.log("category.department", category.department);
        return category.department;
      })
      .reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []
      );

    if (this.state.orderDir === "asc") {
      order = 1;
    } else {
      order = -1;
    }

    if (this.state.filterBy !== "allDepartments") {
      filteredEmployees = this.state.employees
        .sort((a, b) => {
          if (
            a[this.state.orderBy].toLowerCase() <
            b[this.state.orderBy].toLowerCase()
          ) {
            return -1 * order;
          } else {
            return 1 * order;
          }
        })
        .filter((eachItem) => {
          console.log("each item is ", eachItem.department);
          console.log("this.state.filterBy", this.state.filterBy);
          return eachItem.department
            .toLowerCase()
            .includes(this.state.filterBy.toLowerCase());
        });
    } else {
      filteredEmployees = this.state.employees.sort((a, b) => {
        if (
          a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      });
    }

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <div className="sort-employees justify-content-center row my-4">
                  <FilterEmployees
                    filterBy={this.state.filterBy}
                    departments={filteredDepartments}
                    changeFilter={this.changeFilter}
                  />
                  <SortEmployees
                    orderBy={this.state.orderBy}
                    orderDir={this.state.orderDir}
                    changeOrder={this.changeOrder}
                  />
                </div>
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
