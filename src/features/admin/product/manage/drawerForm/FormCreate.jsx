import {MdRemove, MdAdd} from 'react-icons/md';

import Input from '../../../../../components/Input';

export default function FormCreate({
  onChange,
  onSubmit,
  onExpand,
  expandSection,
  title,
  input,
  error,
}) {
  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <div className="flex flex-col">
        <button
          type="button"
          className="flex items-center gap-2 text-stone-600 p-2  hover:text-cerulean-blue-800 text-lg "
          onClick={() => onExpand('create')}
        >
          <span>{expandSection === 'create' ? <MdRemove /> : <MdAdd />}</span>
          <h1
            className={`${
              expandSection === 'create'
                ? 'font-semibold text-cerulean-blue-800'
                : ''
            }`}
          >
            Create new {title}
          </h1>
        </button>
      </div>
      {expandSection === 'create' && (
        <div className=" flex flex-col px-8">
          <p className="text-sm font-normal text-stone-600 py-1">Title</p>
          <div className="flex gap-2">
            <Input
              type="text"
              name="title"
              onChange={onChange}
              value={input.title}
              error={error.title}
              width="45"
            />
            <button
              type="submit"
              className="flex justify-center rounded-full border-2 p-2 px-4 text-cerulean-blue-800 font-semibold hover:border-cerulean-blue-800"
            >
              Create
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
