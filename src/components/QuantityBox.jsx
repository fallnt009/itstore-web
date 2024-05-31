import {useEffect, useState} from 'react';
import {MdOutlineRemoveCircle, MdOutlineAddCircle} from 'react-icons/md';

export default function QuantityBox({qty, initialQty, onQuantityChange}) {
  const [count, setCount] = useState(initialQty || 1);

  useEffect(() => {
    setCount(initialQty || 1);
  }, [initialQty]);

  const increaseCount = () => {
    //ไม่น้อยกว่า qty ของ stock
    if (count < qty) {
      const newCount = count + 1;
      setCount(newCount);
      onQuantityChange(newCount);
    }
  };
  const decreaseCount = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onQuantityChange(newCount);
    }
  };

  return (
    <div className="flex gap-5">
      <div className="flex items-center gap-2 text-cerulean-blue-800">
        <span className="cursor-pointer" onClick={decreaseCount}>
          <MdOutlineRemoveCircle size={35} />
        </span>
        <span>{count}</span>
        <span className="cursor-pointer" onClick={increaseCount}>
          <MdOutlineAddCircle size={35} />
        </span>
      </div>
    </div>
  );
}
