import {useState} from 'react';
import {MdOutlineRemoveCircle, MdOutlineAddCircle} from 'react-icons/md';

export default function ProductQuantity() {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decreaseCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <form className="flex gap-5" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 text-cerulean-blue-800">
        <span className="cursor-pointer" onClick={decreaseCount}>
          <MdOutlineRemoveCircle size={35} />
        </span>
        <span>{count}</span>
        <span className="cursor-pointer" onClick={increaseCount}>
          <MdOutlineAddCircle size={35} />
        </span>
      </div>
      <div>
        <button type="submit" className="bg-cerulean-blue-800 p-2  text-white">
          Add to Cart
        </button>
      </div>
    </form>
  );
}
