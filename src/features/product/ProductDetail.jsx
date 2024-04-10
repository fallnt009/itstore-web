import ProductSpecification from './ProductSpecification';
import ProductDescription from './ProductDescription';
import ProductQuantity from './ProductQuantity';

export default function ProductDetail() {
  return (
    <>
      <div className="mx-5 mt-10">
        <div className="my-5">
          <p>Home / Components / Mainboard / AM4 /ASROCK B450M STEEL LEGEND</p>
        </div>
        <div className="flex">
          <div className="flex-1">
            <span>
              <img
                src="https://down-th.img.susercontent.com/file/d1952c0e6cf80bb1f395c4f76facb520"
                alt="product pic"
              />
            </span>
          </div>
          {/* Title */}
          <div className="flex-1">
            <div>
              <h1 className="text-4xl text-cerulean-blue-800 font-semibold ">
                ASROCK B450M STEEL LEGEND
              </h1>
              {/* Brand */}
              <p className=" text-lg ml-1 mt-2 text-cerulean-blue-800">
                ASROCK
              </p>
            </div>
            {/* Price */}
            <div className="my-5 text-2xl text-cerulean-blue-800 font-semibold ">
              <h1>฿2,950</h1>
            </div>
            {/*Description box*/}
            <div className="my-5">
              <ProductDescription />
            </div>
            {/* Checkout Box */}
            <div className="flex gap-6 my-10">
              <ProductQuantity />
            </div>
          </div>
        </div>
        <div className="border-2">
          <div>
            <h1 className="text-4xl text-cerulean-blue-800 font-semibold ">
              Specification
            </h1>
          </div>
          {/* Model */}
          <div>
            <ProductSpecification />
          </div>
        </div>
      </div>
    </>
  );
}
