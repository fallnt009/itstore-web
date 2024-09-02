export default function SpecProductItem({item}) {
  if (!item || Object.keys(item).length === 0) {
    return <div className="flex justify-center text-lg">No Data Yet</div>;
  }
  return (
    <div className="grid grid-cols-[0.5fr_3fr_1fr] text-sm border-b py-2">
      <div>{item.SpecProduct?.id || ''}</div>
      <div>{item.SpecProduct?.text || ''}</div>
    </div>
  );
}
