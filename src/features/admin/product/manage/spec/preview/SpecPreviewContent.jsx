import useAdmin from '../../../../../../hooks/useAdmin';

import SpecProductItem from '../lists/SpecProductItem';

export default function SpecPreviewContent({onEdit, onDelete, onSelect}) {
  const {specProduct} = useAdmin();

  return (
    <div>
      <div className="flex items-center gap-2 pb-2 text-lg font-semibold text-gray-600">
        {/* <h1>{item.title} Preview</h1> */}
      </div>
      <div className="grid grid-cols-[0.5fr_3fr_1fr] bg-gray-200 p-2 rounded-lg text-gray-600 font-semibold text-sm">
        <h1>Id</h1>
        <h1>Text</h1>
        <h1 className="flex justify-center">Actions</h1>
      </div>
      <div className="px-2">
        {specProduct.length !== 0 ? (
          specProduct.map((item) => (
            <div key={item.SpecProduct?.id}>
              <SpecProductItem
                item={item}
                onEdit={onEdit}
                onDelete={onDelete}
                onSelect={onSelect}
              />
            </div>
          ))
        ) : (
          <div className="flex justify-center py-5">No Data Yet</div>
        )}
      </div>
    </div>
  );
}
