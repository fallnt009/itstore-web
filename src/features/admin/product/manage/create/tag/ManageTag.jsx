import {useState, useEffect} from 'react';
import {MdClose} from 'react-icons/md';

import useAdmin from '../../../../../../hooks/useAdmin';

import TagList from './TagList';

export default function ManageTag({
  onClose,
  setBcsId,
  bcsData,
  setBcsData,
  bcsId,
}) {
  const {brands, fetchBrand, fetchBrandTag} = useAdmin();
  const [selectBrandId, setSelectBrandId] = useState('');

  useEffect(() => {
    fetchBrand();
  }, [fetchBrand]);

  //if bcsData have data inside proceed to show that already selected
  useEffect(() => {
    const loadBrandTag = async () => {
      if (bcsData) {
        const getBrandId = bcsData.BrandCategory.brandId;
        setSelectBrandId(getBrandId);

        await fetchBrandTag(getBrandId);
      }
    };
    loadBrandTag();
  }, [bcsData, fetchBrandTag]);

  const handleSelectBrand = async (e) => {
    const brandId = e.target.value;
    setSelectBrandId(brandId);
    if (brandId) {
      await fetchBrandTag(brandId);
    }
  };

  const handleOnClick = (id, data) => {
    //set bcs id and data
    setBcsId(id);
    setBcsData(data);
  };

  return (
    <div className="w-96 px-5 py-2">
      <div className="flex justify-between items-center text-sm">
        <h1 className="font-semibold">Manage Tag</h1>
        <button onClick={onClose}>
          <MdClose />
        </button>
      </div>
      <div className="py-2">
        <h4>Select Brand</h4>
        <select
          className="p-2 rounded-md border-2"
          value={selectBrandId || ''}
          onChange={handleSelectBrand}
        >
          <option value="">Choose Brand</option>
          {brands?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <TagList
          active={bcsId}
          handleOnClick={handleOnClick}
          onClose={onClose}
        />
      </div>
    </div>
  );
}
