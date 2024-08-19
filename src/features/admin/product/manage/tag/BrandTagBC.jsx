import useAdmin from '../../../../../hooks/useAdmin';

import CompleteStatus from '../../../../../components/CompleteStatus';

export default function BrandTagBC({
  selectBrand,
  selectCategory,
  handleToggle,
  onSelectBrand,
  onSelectCategory,
}) {
  const {brands, mainCategory} = useAdmin();
  return (
    <div className="p-2">
      <div className="flex flex-col">
        <h4 className="text-cerulean-blue-800  font-semibold">Select Brand</h4>
        <p className="text-sm text-stone-600">Select Brand to create tag</p>
      </div>
      <div className="grid grid-cols-2 gap-2 py-2">
        <select
          className="p-2 rounded-md border-2"
          value={selectBrand}
          onChange={onSelectBrand}
          required
        >
          <option value="">Choose Brand</option>
          {brands?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
        <CompleteStatus onSelect={selectBrand} />
      </div>
      <div className="flex flex-col">
        <h4 className="text-cerulean-blue-800  font-semibold">
          Select Category
        </h4>
        <p className="text-sm text-stone-600">Select Category to create tag</p>
      </div>
      <div className="grid grid-cols-2 gap-2 py-2">
        <select
          className="p-2 rounded-md border-2"
          value={selectCategory || ''}
          onChange={onSelectCategory}
          required
        >
          <option value="">Choose Category</option>
          {mainCategory?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
        <CompleteStatus onSelect={selectCategory} />
      </div>
      <div className="flex justify-center py-2">
        {selectBrand && selectCategory ? (
          <button
            className="p-2 px-24 border-2 rounded-lg text-cerulean-blue-800 hover:border-cerulean-blue-800"
            onClick={handleToggle}
          >
            Next
          </button>
        ) : (
          <button className="p-2 px-24 border-2 rounded-lg bg-stone-400 text-white ">
            Next
          </button>
        )}
      </div>
    </div>
  );
}
