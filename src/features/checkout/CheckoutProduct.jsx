import CheckoutProductItem from './CheckoutProductItem';

export default function CheckoutProduct({finalCart}) {
  return (
    <div className="flex flex-col gap-1 border-t-2 py-4 ">
      <h4 className="font-semibold">Products</h4>
      <div>
        {/* {finalCart.map((el) => (
          <CheckoutProductItem key={el.id} product={el.Product} qty={el.qty} />
        ))} */}
      </div>
    </div>
  );
}
