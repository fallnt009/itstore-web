import useAdmin from '../../../../../hooks/useAdmin';

import CompleteStatus from '../../../../../components/CompleteStatus';

export default function BrandTagBCS({
  selectSubCategory,
  handleToggle,
  onSelectSubCategory,
  onSubmit,
}) {
  const {subCategory} = useAdmin();

  return (
    <div className="p-2">
      <div className="flex flex-col">
        <h4 className="text-cerulean-blue-800  font-semibold">
          Select Sub Category
        </h4>
        <p className="text-sm text-stone-600">
          Select Sub Category to create tag
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 py-2">
        <select
          className="p-2 rounded-md border-2"
          value={selectSubCategory || ''}
          onChange={onSelectSubCategory}
          required
        >
          <option value="">Choose Sub Category</option>
          {subCategory?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
        <CompleteStatus onSelect={selectSubCategory} />
      </div>
      <div className="grid grid-cols-2 py-2">
        <button
          className="p-2  border-2 rounded-lg text-cerulean-blue-800 hover:border-cerulean-blue-800 "
          onClick={handleToggle}
        >
          Back
        </button>
        {selectSubCategory ? (
          <button
            className="p-2 border-2 rounded-lg text-cerulean-blue-800 hover:border-cerulean-blue-800 "
            onClick={onSubmit}
          >
            Create
          </button>
        ) : (
          <button className="p-2 border-2 rounded-lg bg-stone-400 text-white ">
            Create
          </button>
        )}
      </div>
    </div>
  );
}
