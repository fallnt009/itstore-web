import useAdmin from '../../../../../hooks/useAdmin';
import TagItem from './TagItem';

export default function TagList({active, handleOnClick, onClose}) {
  const {brandTag} = useAdmin();
  return (
    <>
      <div className="grid grid-cols-4 border-b py-2">
        <div className="flex justify-center">ID</div>
        <div className="flex justify-center">Brand</div>
        <div className="flex justify-center">Sub Category</div>
        <div className="flex justify-center">Action</div>
      </div>
      <div className="overflow-y-scroll h-48">
        {brandTag?.map((item) => (
          <TagItem
            key={item.id}
            id={item.id}
            active={active}
            item={item}
            brandCategory={item.BrandCategory}
            subCategory={item.SubCategory}
            handleOnClick={handleOnClick}
          />
        ))}
      </div>
      <div className="pt-5 pb-2">
        <button
          type="button"
          onClick={onClose}
          className="p-2 border rounded-lg border-cerulean-blue-800 text-cerulean-blue-800 hover:font-semibold w-28 h-8"
        >
          Confirm Select
        </button>
      </div>
    </>
  );
}
