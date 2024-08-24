import SpecListItem from './SpecListItem';

import ParginationButton from '../../../../../../components/ParginationButton';

export default function SpecLists({specItems, page, totalPages, onChange}) {
  return (
    <div className="px-10 py-10">
      <div className="grid grid-cols-[0.5fr_6fr_2fr_2fr]  bg-gray-200 p-2 rounded-lg text-gray-600 font-semibold text-sm">
        <div className="flex gap-1">Id</div>
        <div>Name</div>
        <div>Category</div>
        <div className="flex justify-center">Actions</div>
      </div>
      <SpecListItem specItems={specItems} />
      <div className="flex justify-center gap-2 py-5">
        <ParginationButton
          page={page}
          totalPages={totalPages}
          handleChange={onChange}
        />
      </div>
    </div>
  );
}
