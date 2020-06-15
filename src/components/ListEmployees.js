/* eslint-disable no-unused-vars */
import React from "react";

function listEmployees(props) {
  return (
    <div className="staff-item col media py-3">
      <div className="staff-info media-body">
        <div className="staff-head d-flex">
          <span className="staff-name">
            {props.firstName} {props.surname}
          </span>
        </div>
        <div className="staff-details">
          <span className="label-item">Position: </span>
          <span>{props.position}</span>
        </div>
        <div className="staff-details">
          <span className="label-item">Department: </span>
          <span>{props.department}</span>
        </div>
        <div className="staff-details">
          <span className="label-item">P: </span>
          <span>{props.phone}</span>
        </div>
        <div className="staff-details">
          <span className="label-item">M: </span>
          <span>{props.mobile}</span>
        </div>
        <div className="staff-details">
          <span className="label-item">E: </span>
          <span>{props.email}</span>
        </div>
        <div className="staff-details">
          <span className="label-item">Building: </span>
          <span>{props.building}</span>
        </div>
        <div className="staff-details">
          <span className="label-item">Location: </span>
          <span>{props.location}</span>
        </div>
      </div>
    </div>
  );
}

export default listEmployees;
