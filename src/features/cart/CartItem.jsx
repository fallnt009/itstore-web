import ProductPic from '../../components/ProductPic';

import QuantityBox from '../../components/QuantityBox';

export default function CartItem({item, onQuantityChange, onDelete}) {
  const {Product} = item;

  const handleQuantityChange = (newQty) => {
    onQuantityChange(item.id, newQty);
  };

  return (
    <div className="grid items-start grid-cols-[1fr_4fr] border-t-2 p-5 mx-5">
      {/* product img */}
      <div className="grid w-full">
        <ProductPic src={Product.productImage} size="100px" />
      </div>
      <div className="grid">
        {/* product detail */}
        <div className="flex justify-between text-md text-stone-700">
          <div className="flex font-bold gap-5 justify-start ">
            {Product.title}
          </div>
          <div className="font-bold">
            {item.qty * parseFloat(Product.price)} THB
          </div>
        </div>
        <div className="flex text-sm text-stone-500 ">
          <p>{Product.description}</p>
        </div>
        <div className="flex gap-8 mt-5 items-center text-stone-700">
          <div className="">
            <QuantityBox
              qty={Product.qtyInStock}
              initialQty={item.qty}
              onQuantityChange={handleQuantityChange}
            />
          </div>
          <button
            className="font-bold text-sm hover:bg-cerulean-blue-800 px-6 py-3 rounded-3xl hover:text-white"
            onClick={() => onDelete(item.id)}
          >
            Remove
          </button>
          <button className="font-bold text-sm hover:bg-cerulean-blue-800 px-6 py-3 rounded-3xl hover:text-white">
            Save to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
