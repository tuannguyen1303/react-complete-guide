import { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Utilities/Card/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = props.date;
  const [expenseTitle, setExpenseTitle] = useState(props.title);
  const expenseAmount = props.amount;

  // functions area
  const changeTitleHandler = () => {
    setExpenseTitle("New Title!!!");
    console.log("Clicked!!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={changeTitleHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
