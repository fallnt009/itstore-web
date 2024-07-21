import {format} from 'date-fns';
import {NumericFormat} from 'react-number-format';

export default function ProductCardInfo({
  title,
  subCategoryName,
  price,
  discount,
}) {
  //if product have discount show (price with discount,discount percentage,and discount start and end date)

  const discountCal = Number(price) * (discount?.amount / 100);
  const discountPrice = price - discountCal;
  return (
    <div className="container">
      <div className=" grid text-cerulean-blue-800 mt-5 w-full">
        <div className="flex flex-col items-start gap-3">
          <h3 className="font-bold">{title}</h3>
          <p className=" font-regular text-sm">
            {subCategoryName.toUpperCase()}
          </p>
          {/* Price  */}
          <div>
            <div
              className={`font-bold text-2xl ${discount ? 'line-through' : ''}`}
            >
              <NumericFormat
                value={price}
                displayType="text"
                thousandSeparator=","
              />{' '}
              THB
            </div>
          </div>
          {/* discount tag */}
          {discount ? (
            <div>
              <div className="flex justify-between font-semibold">
                <NumericFormat
                  value={discountPrice}
                  displayType="text"
                  thousandSeparator=","
                  suffix={' ' + 'THB'}
                />

                <div className="text-red-500">{discount.amount}% off</div>
              </div>
              <div className="text-sm">
                until {format(new Date(discount.startDate), 'dd/MM/yyyy')} -
                {format(new Date(discount.endDate), 'dd/MM/yyyy')}
              </div>
            </div>
          ) : (
            <div className="my-[18px]"></div>
          )}
        </div>
      </div>
    </div>
  );
}
