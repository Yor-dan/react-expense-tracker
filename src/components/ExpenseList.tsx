import { Expense } from '../App';

interface Props {
  expenses: Expense[];
  onDeleteExpense: (id: number) => void;
}

const ExpenseList = ({ expenses, onDeleteExpense }: Props) => {
  const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>Rp {expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                onClick={() => onDeleteExpense(expense.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td>Total</td>
          <td colSpan={3}>Rp {totalAmount}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseList;
