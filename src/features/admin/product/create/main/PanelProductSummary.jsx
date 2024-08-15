import {MdAdd} from 'react-icons/md';

export default function PanelProductSummary({bcsData}) {
  const {BrandCategory, SubCategory} = bcsData;

  const objNotEmpty = Object.keys(bcsData).length > 0;

  return (
    <div className="py-2 px-3 border">
      <div className="border-2 rounded-md px-4 py-2">
        <div className="py-2">
          <h2 className="font-semibold text-xl text-cerulean-blue-800">
            Preview
          </h2>
        </div>
        <div className="py-2">
          <div className="flex gap-2 text-stone-600">
            <p className="font-semibold">Tags :</p>
            {objNotEmpty && (
              <div className="flex items-center gap-1">
                <div className="font-semibold">
                  {BrandCategory?.Brand.title}
                </div>
                <span>
                  <MdAdd />
                </span>
                <div>{SubCategory?.title}</div>
              </div>
            )}
          </div>
          <div className="flex gap-2 text-stone-600">
            <p className="font-semibold">ID :</p>
            <p>#111112</p>
          </div>
          <div className="flex gap-2 text-stone-600">
            <p className="font-semibold">Name :</p>
            <p>ASUS Rog Main</p>
          </div>
          <div className="flex gap-2 text-stone-600">
            <p className="font-semibold">Price :</p>
            <p>9,500</p>
          </div>
        </div>
      </div>
    </div>
  );
}
