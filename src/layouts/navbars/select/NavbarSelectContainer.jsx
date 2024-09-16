import {useState} from 'react';
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdKeyboardDoubleArrowUp,
} from 'react-icons/md';

import Category from '../../../data/productCategory.json';
import Component from '../../../assets/navbar/component.png';

import SelectControlButton from './button/SelectControlButton';
import SelectMainButton from './button/SelectMainButton';
import SelectSubButton from './button/SelectSubButton';

export default function NavbarSelectContainer({onClose}) {
  const [subBarOpen, setSubBarOpen] = useState(false);
  const [selectCategoryId, setSelectCategoryId] = useState({});

  const handleOpenSubBar = (id) => {
    setSelectCategoryId(id);
    setSubBarOpen(true);
  };
  const handleCloseSubBar = () => {
    setSelectCategoryId({});
    setSubBarOpen(false);
  };

  return (
    <div className="px-10 py-5 border-b">
      <div className="flex">
        <div>
          <div className="relative w-full h-full overflow-hidden pr-5 border-r">
            {!subBarOpen && (
              <div className="text-gray-600" onClick={onClose}>
                <MdKeyboardDoubleArrowUp size={25} />
              </div>
            )}
            <div
              className={`flex transition-transform duration-1000 ease-in-out`}
              style={{
                transform: subBarOpen ? `translateX(0%)` : `translateX(-100%)`,
                width: '100%',
              }}
            >
              {subBarOpen && (
                <div className="flex flex-col justify-start">
                  <SelectControlButton
                    title="Back"
                    onClose={handleCloseSubBar}
                  />
                  <div className="font-semibold text-lg">Component(DIY)</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center  items-center px-2 pb-3 text-gray-400">
          <MdArrowBackIos size={50} />
        </div>
        <div className="flex overflow-x-hidden px-4 pb-3 w-full ">
          <div className="grid grid-flow-col gap-16">
            {!subBarOpen &&
              Category?.map((item) => (
                <div key={item.id}>
                  <SelectMainButton
                    item={item}
                    src={Component}
                    onSelect={handleOpenSubBar}
                  />
                </div>
              ))}
            {subBarOpen &&
              Category?.filter(
                (filter) => filter.id === selectCategoryId
              ).flatMap((item) =>
                item.subCategory.map((sub) => (
                  <div key={item.id}>
                    <SelectSubButton item={sub} src={Component} />
                  </div>
                ))
              )}
          </div>
        </div>
        <div className="flex justify-center items-center px-2 pb-3 text-gray-400">
          <MdArrowForwardIos size={50} />
        </div>
      </div>
    </div>
  );
}
