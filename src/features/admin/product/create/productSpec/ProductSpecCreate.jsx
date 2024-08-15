import {useState, useEffect} from 'react';
import useAdmin from '../../../../../hooks/useAdmin';

export default function ProductSpecCreate() {
  const {specItems, subCategory, fetchSubCategory, fetchSpecItem} = useAdmin();

  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    fetchSubCategory();
  }, [fetchSubCategory]);

  const handleSelect = async (e) => {
    const id = e.target.value;
    setSelectedId(id);
    fetchSpecItem(id);
  };

  return (
    <div>
      <form className="flex flex-col gap-2">
        <div>
          <label>Sub Category</label>
          <select className="p-2 rounded-md border-2" onChange={handleSelect}>
            <option value="">Choose SubCategory</option>
            {subCategory.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        {selectedId && (
          <div>
            {specItems.map((item) => (
              <div key={item.id}>{item.title}</div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}
