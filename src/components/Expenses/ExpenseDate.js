import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date1.toLocaleString("en-US", { month: "long" });
  const year = props.date1.getFullYear();
  const day = props.date1.getDate();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month} </div>
      <div className="expense-date__year">{year} </div>
      <div className="expense-date__day">{day} </div>
    </div>
  );
};

export default ExpenseDate;
