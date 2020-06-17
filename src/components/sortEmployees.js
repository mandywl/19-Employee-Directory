/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class SortEmployees extends Component {
  render() {
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
              Sort by: <span className="caret" />
            </button>
            <div className="sort-menu dropdown-menu dropdown-menu-right">
              <button
                className={
                  "sort-by dropdown-item " +
                  (this.props.orderBy === "firstname" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder("firstName", this.props.orderDir)
                }
                href="#"
              >
                First Name
              </button>
              <div role="separator" className="dropdown-divider" />
              <button
                className={
                  "sort-by dropdown-item " +
                  (this.props.orderDir === "asc" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder(this.props.orderBy, "asc")
                }
                href="#"
              >
                Asc
              </button>
              <button
                className={
                  "sort-by dropdown-item " +
                  (this.props.orderDir === "desc" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder(this.props.orderBy, "desc")
                }
                href="#"
              >
                Desc
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SortEmployees;
