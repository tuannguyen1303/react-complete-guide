import { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Utilities/Card/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = props.date;
  const expenseAmount = props.amount;
  const expenseTitle = props.title;

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
