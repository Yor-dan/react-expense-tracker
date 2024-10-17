import { FormEvent, useRef, useState } from 'react';
import { Expense } from '../App';
import categories from '../utils';

interface Props {
  onAddExpense: (expense: Expense) => void;
}

const ExpenseForm = ({ onAddExpense } : Props) => {
  const descRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const [isValid, setValid] = useState(false);

  const checkValidity = () => {
    if (
      descRef.current?.value &&
      amountRef.current?.value &&
      categoryRef.current?.value
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const expense: Expense = {
      id: Date.now(),
      description: descRef.current!.value,
      amount: +amountRef.current!.value,
      category: categoryRef.current!.value,
    };

    onAddExpense(expense);
  };

  return (
    <form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
      <div>
        <label htmlFor="desc" className="form-label fw-semibold">
          Description
        </label>
        <input
          id="desc"
          ref={descRef}
          type="text"
          onChange={checkValidity}
          className="form-control border-2"
          required
        />
      </div>
      <div>
        <label htmlFor="amount" className="form-label fw-semibold">
          Amount (Rp)
        </label>
        <input
          id="amount"
          ref={amountRef}
          onChange={checkValidity}
          type="number"
          className="form-control border-2"
        />
      </div>
      <div>
        <label htmlFor="category" className="form-label fw-semibold">
          Category
        </label>
        <select
          id="category"
          ref={categoryRef}
          onChange={checkValidity}
          className="form-select border-2"
          required
        >
          <option></option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className={`btn btn-primary ${!isValid && 'disabled'}`}
      >
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
