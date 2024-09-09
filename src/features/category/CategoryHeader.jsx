import React from 'react';

export default function CategoryHeader({
  categorySlug,
  subCategorySlug,
  totalItems,
}) {
  const categoryTitle = categorySlug.toUpperCase();
  const subCategoryTitle = subCategorySlug.toUpperCase();

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-5xl text-cerulean-blue-800 font-semibold ">
          {categoryTitle}
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <p className=" text-lg ml-1 mt-2 text-cerulean-blue-800">
          {subCategoryTitle}
        </p>
        <p className=" text-lg ml-1 mt-2 text-cerulean-blue-800">
          Total Items : {totalItems}
        </p>
      </div>
    </>
  );
}
