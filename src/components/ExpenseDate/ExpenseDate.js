import "./ExpenseDate.css";

function ExpenseDate(props) {
  // define variables for display month, year, day from props
  const month = props.expenseDate.toLocaleString("en-US", { month: "long" });
  const year = props.expenseDate.getFullYear();
  const day = props.expenseDate.toLocaleString("en-US", { day: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
