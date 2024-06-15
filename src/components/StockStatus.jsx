export default function StockStatus({qtyInStock}) {
  return (
    <>
      {qtyInStock > 1 ? (
        <div className="flex items-center">
          <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>
          In Stock {qtyInStock} items
        </div>
      ) : (
        <div className="flex items-center">
          <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>
          In Stock {qtyInStock} item
        </div>
      )}
      {qtyInStock === 0 && (
        <div className="flex items-center">
          <span className="flex w-3 h-3 me-3 bg-red-500 rounded-full"></span>
          out of stock
        </div>
      )}
    </>
  );
}
