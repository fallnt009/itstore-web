export default function SInfo({product}) {
  const {title, price, qtyInStock, description} = product;
  return (
    <div>
      <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2 bg-gray-200 p-2 rounded-lg text-gray-600 font-semibold text-sm">
        <h1>Title</h1>
        <h1>Description</h1>
      </div>
      <div className="flex flex-col gap-2 py-5 px-2 border-b">
        <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2 text-sm">
          <h4 className="flex items-center font-semibold">Name</h4>
          <div className="flex flex-col gap-1 text-xs">
            <div className="flex items-center gap-2">{title}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-5 px-2 border-b">
        <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2 text-sm">
          <h4 className="flex items-center font-semibold">Price</h4>
          <div className="flex flex-col gap-1 text-xs">
            <div className="flex items-center gap-2">{price}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-5 px-2 border-b">
        <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2 text-sm">
          <h4 className="flex items-center font-semibold">Quantity</h4>
          <div className="flex flex-col gap-1 text-xs">
            <div className="flex items-center gap-2">{qtyInStock}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-5 px-2 border-b">
        <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2 text-sm">
          <h4 className="flex items-center font-semibold">Description</h4>
          <div className="flex flex-col gap-1 text-xs">
            <div className="flex items-center gap-2">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
