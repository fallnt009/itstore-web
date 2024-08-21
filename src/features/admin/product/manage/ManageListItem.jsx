import {NumericFormat} from 'react-number-format';

import ManageAction from './ManageAction';

export default function ManageListItem({products}) {
  return (
    <>
      {products?.map((item) => (
        <div
          className="grid grid-cols-[0.5fr_6fr_2fr_2fr_1.5fr] p-2 py-3 border-b text-sm"
          key={item.id}
        >
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>
            <NumericFormat
              value={item.price}
              displayType={'text'}
              thousandSeparator={true}
            />
          </div>
          <div>
            {/* Sub Category */}
            {item.ProductSubCategory.BrandCategorySub.SubCategory.title ||
              'Not assign'}
          </div>
          <div>
            <ManageAction id={item.id} />
          </div>
        </div>
      ))}
    </>
  );
}
