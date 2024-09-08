import {MdKeyboardArrowRight} from 'react-icons/md';

export default function TagPreview({data}) {
  if (!data)
    return (
      <div className="text-red-500 mt-2 ">*Please Select Tag to proceed</div>
    );
  const {BrandCategory, SubCategory} = data;

  return (
    <div className="flex gap-3 text-sm py-2">
      <h1 className="font-semibold">Tag</h1>
      <div className="flex items-center gap-1 text-stone-600">
        <p>{BrandCategory?.Brand.title || ''}</p>
        <span>
          <MdKeyboardArrowRight />
        </span>
        <p>{SubCategory?.title || ''}</p>
      </div>
    </div>
  );
}
