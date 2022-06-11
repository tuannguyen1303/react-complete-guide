import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const onSaveDataExpenseHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(true);
  };

  const [isEditing, setIsEditing] = useState(false);
  const onEditingHandler = () => {
    setIsEditing(true);
  };

  const onCancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={onEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={onCancelHandler}
          onSaveDataExpense={onSaveDataExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
