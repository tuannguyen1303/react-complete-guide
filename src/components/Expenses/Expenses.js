import { useState } from "react";
import Card from "../Utilities/Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "../ExpensesList/ExpensesList";

function Expenses(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList item={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
