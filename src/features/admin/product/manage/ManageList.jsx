import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdCheckCircle,
  MdCancel,
} from 'react-icons/md';

import ManageListItem from './ManageListItem';

import ParginationButton from '../../../../components/ParginationButton';

export default function ManageList({
  products,
  page,
  totalPages,
  order,
  onChangePage,
  setOrder,
  setSelectProduct,
}) {
  const handleClickOrder = () => {
    setOrder((prevOrder) => (prevOrder === 'ASC' ? 'DESC' : 'ASC'));
  };
  return (
    <div className="px-10 pb-10">
      <div className="flex justify-end pb-3 px-2 gap-5 text-gray-500 text-sm">
        <div className="flex gap-2 items-center">
          <span className="flex text-green-500 rounded-full">
            <MdCheckCircle size={15} />
          </span>
          Assign
        </div>
        <div className="flex gap-2 items-center">
          <span className="flex text-red-500 rounded-full">
            <MdCancel size={15} />
          </span>
          Not Assign
        </div>
      </div>
      <div className="grid grid-cols-[0.5fr_5fr_2fr_2fr_1fr_1fr_1.5fr]  bg-gray-200 p-2 rounded-lg text-gray-600 font-semibold text-sm">
        <div className="flex gap-1">
          Id
          <button onClick={handleClickOrder}>
            {order === 'ASC' ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
        </div>
        <div>Name</div>
        <div className="flex justify-center">Price</div>
        <div className="flex justify-center">Category</div>
        <div className="flex justify-center">Spec</div>
        <div className="flex justify-center">Discount</div>
        <div className="flex justify-center">Actions</div>
      </div>

      <ManageListItem products={products} />
      <div className="flex justify-center gap-2 pb-5 pt-10">
        <ParginationButton
          page={page}
          totalPages={totalPages}
          handleChange={onChangePage}
        />
      </div>
    </div>
  );
}
