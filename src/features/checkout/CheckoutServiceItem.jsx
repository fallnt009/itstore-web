import {useCallback, useEffect} from 'react';

export default function CheckoutServiceItem({
  select,
  setSelect,
  selectService,
  item,
  checkout,
}) {
  const {name, price, description} = item;

  const serviceId = checkout.Service?.id;

  useEffect(() => {
    if (serviceId === item.id) {
      setSelect(true);
    } else {
      setSelect(false);
    }
  }, [serviceId, item.id, setSelect]);

  const handleOnclick = useCallback(
    (item) => {
      selectService(item);
      setSelect(true);
    },
    [selectService, item, setSelect]
  );

  return (
    <div
      className={`flex flex-col gap-1 mt-5 border-2 p-3 py-4 rounded-lg hover:border-cerulean-blue-800 cursor-pointer ${
        select ? 'border-cerulean-blue-800' : ''
      }`}
      onClick={() => handleOnclick(item)}
    >
      <div className="flex justify-between">
        <h4 className="font-semibold ">{name}</h4>
        {price ? <h4 className="font-semibold ">{price} THB</h4> : ''}
      </div>
      {description ? (
        <p className="text-sm text-stone-600">{description}</p>
      ) : (
        ''
      )}
    </div>
  );
}
