export default function ProductCardInfo({
  title,
  subCategoryName,
  price,
  discount,
}) {
  //if product have discount show (price with discount,discount percentage,and discount start and end date)

  const discountCal = Number(price) * (10 / 100);
  const discountPrice = price - discountCal;
  return (
    <div className="container">
      <div className=" grid text-cerulean-blue-800 mt-5 w-full">
        <div className="flex flex-col items-start gap-3">
          <h3 className="font-bold">{title}</h3>
          <p className=" font-regular text-sm">{subCategoryName}</p>
          {/* Price  */}
          <div>
            <div className=" font-bold text-2xl ">{price} THB</div>
          </div>
          {/* discount tag */}
          {discount && (
            <div>
              <div>{discountPrice}</div>
              <div>10% off</div>
              <div>until 11/7/2024 - 13/7/2024</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
