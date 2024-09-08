import {MdAdd} from 'react-icons/md';

import useDrawer from '../../../../../../hooks/useDrawer';

import BrandForm from '../brand/BrandForm';
import CategoryForm from '../category/CategoryForm';
import SubCategoryForm from '../subCategory/SubCategoryForm';
import BrandTagForm from '../tag/BrandTagForm';

export default function HeaderMenu() {
  const {openDrawerWithContent, closeDrawer} = useDrawer();

  const handleManageBrand = () => {
    openDrawerWithContent(<BrandForm closeDrawer={closeDrawer} />);
  };
  const handleManageCategory = () => {
    openDrawerWithContent(<CategoryForm closeDrawer={closeDrawer} />);
  };
  const handleManageSubCategory = () => {
    openDrawerWithContent(<SubCategoryForm closeDrawer={closeDrawer} />);
  };
  const handleManageTags = () => {
    openDrawerWithContent(<BrandTagForm closeDrawer={closeDrawer} />);
  };
  return (
    <div className="flex gap-5 text-sm px-2 rounded-lg">
      <button
        type="button"
        className="flex items-center gap-1 p-2 border rounded-lg font-semibold text-white bg-indigo-600 hover:bg-white hover:border-indigo-600 hover:text-indigo-600 shadow"
        onClick={handleManageBrand}
      >
        <span>
          <MdAdd />
        </span>
        Create Brand
      </button>
      <button
        type="button"
        className="flex items-center gap-1 p-2 border rounded-lg font-semibold text-white bg-indigo-600 hover:bg-white hover:border-indigo-600 hover:text-indigo-600 shadow"
        onClick={handleManageCategory}
      >
        <span>
          <MdAdd />
        </span>
        Create Category
      </button>
      <button
        type="button"
        className="flex items-center gap-1 p-2 border rounded-lg font-semibold text-white bg-indigo-600 hover:bg-white hover:border-indigo-600 hover:text-indigo-600 shadow"
        onClick={handleManageSubCategory}
      >
        <span>
          <MdAdd />
        </span>
        Create Sub Category
      </button>
      <button
        type="button"
        className="flex items-center gap-1 p-2 border rounded-lg font-semibold text-white bg-indigo-600 hover:bg-white hover:border-indigo-600 hover:text-indigo-600 shadow"
        onClick={handleManageTags}
      >
        <span>
          <MdAdd />
        </span>
        Create Brand Tag
      </button>
    </div>
  );
}
