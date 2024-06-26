import ProductPic from '../../components/ProductPic';

export default function OrderDetailsProduct() {
  return (
    <div className="grid items-start grid-cols-[1fr_4fr] p-5 ">
      {/* product img */}
      <div className="grid w-full">
        <ProductPic src={''} size="100px" />
      </div>
      <div className="grid">
        {/* product detail */}
        <div className="flex justify-between text-md text-stone-700">
          <div className="flex font-bold gap-5 justify-start ">AmD busser</div>
          <div className="font-bold">9,999 THB</div>
        </div>
        <div className="flex justify-between text-sm text-stone-500 ">
          <p>Hello</p>
          <div className="">qty:2</div>
        </div>
        <div className="flex gap-8 mt-5 items-center text-stone-500"></div>
      </div>
    </div>
  );
}
