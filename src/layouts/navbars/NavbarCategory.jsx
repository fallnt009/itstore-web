import Category from '../../data/productCategory.json';

import NavbarCategoryItem from './NavbarCategoryItem';

export default function NavbarCategory({index, isOpen}) {
  return (
    <div
      className={`relative border rounded-xl p-4 bg-white z-100 ${
        isOpen && index === 0 ? 'block' : 'hidden'
      }`}
    >
      <div className="grid grid-cols-5">
        {Category.map((item) => (
          <>
            <div
              key={item.id}
              className="flex flex-col my-2 text-xl font-medium text-cerulean-blue-800 p-2 border-l-4 cursor-pointer hover:font-semibold hover:border-cerulean-blue-800"
            >
              {item.title}

              <NavbarCategoryItem subCategory={item.subCategory} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
