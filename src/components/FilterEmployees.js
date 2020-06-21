/* eslint-disable no-unused-vars */
import React, { Component } from "react";

function FilterEmployees (props) {
  return (
    <div className="col-md-3">
      <div className="select-property">
        <div className="select-property-append">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter department by: <span className="caret" />
          </button>
          <div className="sort-menu dropdown-menu dropdown-menu-right">
            <button
              className={
                "sort-by dropdown-item " +
                (props.filterBy === "allDepartment" ? "active" : "")
              }
              onClick={(e) => props.changeFilter("allDepartments")}
              href="#"
            >
              All Departments
            </button>
            {props.departments.map((department) => (
              <button
                className={
                  "sort-by dropdown-item " +
                  (props.filterBy === department ? "active" : "")
                }
                key={department}
                onClick={(e) => props.changeFilter(department)}
                href="#"
              >
                {department}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterEmployees;
