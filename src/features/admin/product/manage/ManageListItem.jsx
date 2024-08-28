import {MdCheckCircle, MdCancel, MdOutlineWarning} from 'react-icons/md';

import {NumericFormat} from 'react-number-format';

import ManageAction from './ManageAction';

export default function ManageListItem({products}) {
  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center px-2 py-10 gap-2 text-stone-500">
        <span className="text-orange-400">
          <MdOutlineWarning size={50} />
        </span>
        <h1 className="text-xl">Resource Not Found</h1>
      </div>
    );
  }
  return (
    <>
      {products?.map((item) => (
        <div
          className="grid grid-cols-[0.5fr_5fr_2fr_2fr_1fr_1fr_1.5fr] p-2 py-3 border-b text-sm h-16"
          key={item.id}
        >
          <div className="flex items-center">{item.id}</div>
          <div className="flex items-center">{item.title}</div>
          <div className="flex justify-center items-center">
            <NumericFormat
              value={item.price}
              displayType={'text'}
              thousandSeparator={true}
            />
          </div>
          <div className="flex justify-center items-center">
            {/* Sub Category */}
            {item.ProductSubCategory.BrandCategorySub.SubCategory.title ||
              'Not assign'}
          </div>
          {/* spec stat */}
          <div className="flex justify-center items-center">
            {item.ProductSubSpecs.length !== 0 ? (
              <span className="flex text-green-500 rounded-full">
                <MdCheckCircle size={20} />
              </span>
            ) : (
              <span className="flex text-red-500 rounded-full">
                <MdCancel size={20} />
              </span>
            )}
          </div>
          {/* discount Stat */}
          <div className="flex justify-center items-center">
            {item.ProductDiscount ? (
              <span className="flex  text-green-500 rounded-full">
                <MdCheckCircle size={20} />
              </span>
            ) : (
              <span className="flex text-red-500 rounded-full">
                <MdCancel size={20} />
              </span>
            )}
          </div>
          <ManageAction id={item.id} />
        </div>
      ))}
    </>
  );
}
