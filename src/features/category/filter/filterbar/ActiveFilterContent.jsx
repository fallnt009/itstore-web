import {MdFilterAlt} from 'react-icons/md';

import ActiveFilterItem from './ActiveFilterItem';

export default function ActiveFilterContent({onClear, onRemove, filters}) {
  return (
    <div className="text-base">
      <form className="text-stone-700">
        <div className="flex gap-2 items-center p-3 border-b">
          <h1 className="flex items-center gap-1 py-2 font-semibold text-indigo-600">
            <span>
              <MdFilterAlt />
            </span>
            Active Filter :
          </h1>
          {/* Active Filter */}
          {/* Not more than 3 */}
          {filters?.map((item) => (
            <ActiveFilterItem item={item} onRemove={onRemove} />
          ))}

          <button
            type="button"
            className="p-2 text-indigo-600 hover:text-gray-500 font-semibold"
            onClick={onClear}
          >
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
}
