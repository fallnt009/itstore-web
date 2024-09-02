import useAdmin from '../../../../../../hooks/useAdmin';

import SpecAction from './SpecAction';

export default function SpecListItem({specItems}) {
  return (
    <>
      {specItems?.map((item, index) => (
        <div key={index}>
          <div className="grid grid-cols-[0.5fr_6fr_2fr_2fr] p-2 py-3 border-b text-sm">
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>
              {item.SpecSubcategory?.SubCategory?.title || 'Not Assign'}
            </div>
            <div>
              <SpecAction id={item.id} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
