import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';

import ManageListItem from './ManageListItem';

import ParginationButton from '../../../../components/ParginationButton';

export default function ManageList({
  products,
  page,
  totalPages,
  order,
  onChangePage,
  setOrder,
}) {
  const handleClickOrder = () => {
    setOrder((prevOrder) => (prevOrder === 'ASC' ? 'DESC' : 'ASC'));
  };
  return (
    <div className="px-10">
      <div className="grid grid-cols-[0.5fr_6fr_2fr_2fr_1.5fr]  bg-gray-200 p-2 rounded-lg text-gray-600 font-semibold text-sm">
        <div className="flex gap-1">
          Id
          <button onClick={handleClickOrder}>
            {order === 'ASC' ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
        </div>
        <div>Name</div>
        <div>Price</div>
        <div>Category</div>
        <div className="flex justify-center">Actions</div>
      </div>

      <ManageListItem products={products} />
      <div className="flex justify-center gap-2 py-5">
        <ParginationButton
          page={page}
          totalPages={totalPages}
          handleChange={onChangePage}
        />
      </div>
    </div>
  );
}
