import useAdmin from '../../hooks/useAdmin';
import BrandTagItem from './BrandTagItem';

export default function BrandTagList() {
  const {brandTag} = useAdmin();

  return (
    <div>
      <div className="grid grid-cols-4 border-b-2 font-semibold py-2 text-cerulean-blue-800">
        <div className="flex justify-center">ID</div>
        <div className="flex justify-center">Brand</div>
        <div className="flex justify-center">Sub Category</div>
        <div></div>
      </div>
      <div className="overflow-y-scroll h-44">
        {brandTag?.map((item) => (
          <BrandTagItem
            id={item.id}
            brandCategory={item.BrandCategory}
            subCategory={item.SubCategory}
          />
        ))}
      </div>
    </div>
  );
}
