/* eslint-disable no-unused-vars */
import React from "react";

export const EmployeeDetail = ({label, value}) => {
  return (
    <div className="staff-details">
      <span className="label-item">{label}</span>
      <span>{value}</span>
    </div>
  );
};

function listEmployees(props) {
  return (
    <div className="staff-item col media py-3">
      <div className="staff-info media-body">
        <div className="staff-head d-flex">
          <span className="staff-name">
            {props.firstName} {props.surname}
          </span>
        </div>
        <EmployeeDetail label="Position: " value={props.position}/>
        <EmployeeDetail label="Department: " value={props.department}/>
        <EmployeeDetail label="P: " value={props.phone}/>
        <EmployeeDetail label="M: " value={props.mobile}/>
        <EmployeeDetail label="E: " value={props.email}/>
        <EmployeeDetail label="Building: " value={props.building}/>
        <EmployeeDetail label="Location: " value={props.location}/>
      </div>
    </div>
  );
}

export default listEmployees;
