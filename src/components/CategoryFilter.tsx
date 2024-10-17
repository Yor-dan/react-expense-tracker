import categories from '../utils';

interface Props {
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ onSelectCategory }: Props) => {
  const handleSelectCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onSelectCategory(event.target.value);
  };

  return (
    <div className='d-flex flex-column gap-2'>
      <label className="fw-semibold">Filter by Category:</label>
      <select onChange={handleSelectCategory} className="form-select">
        <option></option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
