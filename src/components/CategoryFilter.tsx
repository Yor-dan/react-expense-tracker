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
    <>
      <label className="fw-semibold">Filter by Category:</label>
      <select onChange={handleSelectCategory} className="form-select">
        <option></option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </>
  );
};

export default CategoryFilter;
