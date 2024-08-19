import {MdRemove, MdEdit} from 'react-icons/md';

import Input from '../../../../../components/Input';

export default function FormPreview({
  isSelect,
  onChange,
  onSubmit,
  onExpand,
  expandSection,
  title,
  input,
  error,
}) {
  return (
    <>
      {isSelect && (
        <div className="border-2 rounded-lg p-4">
          <h4 className="text-cerulean-blue-800 font-semibold">Preview</h4>
          <p className="text-sm text-stone-600">{title} Info</p>
          <div className="text-base font-base text-stone-600 py-2">
            {isSelect ? (
              <>
                <p>ID : {isSelect?.id || ''}</p>
                <p>Title : {isSelect?.title || ''}</p>
              </>
            ) : (
              <p> No {title} selected</p>
            )}
          </div>
          <form className="flex flex-col" onSubmit={onSubmit}>
            <div className="flex flex-col">
              <button
                type="button"
                className="flex items-center gap-2 text-stone-600 p-2 hover:text-cerulean-blue-800 text-lg "
                onClick={() => onExpand('edit')}
              >
                <span>
                  {expandSection === 'edit' ? <MdRemove /> : <MdEdit />}
                </span>
                <h1
                  className={`${
                    expandSection === 'edit'
                      ? 'font-semibold text-cerulean-blue-800'
                      : ''
                  }`}
                >
                  Edit
                </h1>
              </button>
            </div>

            {expandSection === 'edit' && (
              <div className="flex flex-col px-8">
                <p className="text-sm font-normal text-stone-600 py-1">Title</p>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    name="title"
                    width="45"
                    value={input.title}
                    error={error.title}
                    onChange={onChange}
                  />
                  <button
                    type="submit"
                    className="flex justify-center rounded-full border-2 p-2 px-4 text-cerulean-blue-800 font-semibold hover:border-cerulean-blue-800"
                  >
                    Update
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
}
