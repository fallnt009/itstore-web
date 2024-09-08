import SpecProductAction from './actions/SpecProductAction';

export default function SpecProductItem({item, onEdit, onDelete, onSelect}) {
  if (!item || Object.keys(item).length === 0) {
    return <div className="flex justify-center text-lg py-3">No Data Yet</div>;
  }
  return (
    <div className="grid grid-cols-[0.5fr_3fr_1fr] text-sm border-b py-3">
      <div>{item.SpecProduct?.id || ''}</div>
      <div>{item.SpecProduct?.text || ''}</div>
      <div>
        <SpecProductAction
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}
