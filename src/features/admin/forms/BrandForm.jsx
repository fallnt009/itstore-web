import {useState} from 'react';
import {toast} from 'react-toastify';
import {MdAdd, MdRemove, MdEdit} from 'react-icons/md';
import {ImCross} from 'react-icons/im';

import validateCategory from '../../../validators/validate-category';

import Input from '../../../components/Input';

const dataForm = {title: ''};

export default function BrandForm({brands, closeDrawer}) {
  const [input, setInput] = useState(dataForm);
  const [error, setError] = useState({});
  const [isSelect, setIsSelect] = useState(null);
  const [isExpandCreate, setIsExpandCreate] = useState(false);
  const [isExpandEdit, setIsExpandEdit] = useState(false);

  const handleExpandEdit = (e) => {
    e.stopPropagation();
    setIsExpandEdit(!isExpandEdit);
  };

  const handleExpandCreate = (e) => {
    e.stopPropagation();
    setIsExpandCreate(!isExpandCreate);
  };

  const handleChangeInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  };

  const handleSubmitCreate = async (e) => {
    try {
      e.preventDefault();
      const result = validateCategory(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        toast.success('Brand Created Success');
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className="flex flex-col gap-5 px-5 py-5">
      <header className="grid grid-cols-[1fr_6fr] p-2 font-semibold text-lg ">
        <span
          className="flex items-center justify-center  text-stone-400 hover:text-cerulean-blue-800 cursor-pointer"
          onClick={closeDrawer}
        >
          <ImCross />
        </span>
        <h4 className="flex justify-center items-center text-cerulean-blue-800 ">
          Manage Brands
        </h4>
      </header>
      <div className="flex flex-col gap-5 px-5">
        <div className="flex flex-col ">
          <h4 className="text-stone-600 font-semibold">Brand Lists</h4>
          <p className="text-sm text-stone-600">Select brand to edit</p>
        </div>

        <div className="grid grid-cols-3 gap-2 overflow-y-scroll max-h-52">
          {brands?.map((item) => (
            <button
              type="button"
              className={`py-1 font-semibold rounded-md text-cerulean-blue-800 ${
                isSelect === item ? 'border border-stone-400' : ''
              }`}
              key={item.id}
              onClick={() => setIsSelect(item)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div>
          <h4 className="text-stone-600 font-semibold">Brand Preview</h4>
          <div className="text-sm font-base text-stone-600">
            <p>ID : {isSelect?.id}</p>
            <p>Title : {isSelect?.title}</p>
          </div>
        </div>
        {isSelect && (
          <button
            type="button"
            className="flex items-center gap-2 text-stone-600 border p-2 rounded-lg hover:border-cerulean-blue-800"
            onClick={handleExpandEdit}
          >
            <span>{!isExpandEdit ? <MdEdit /> : <MdRemove />}</span>
            <h1
              className={`${
                isExpandEdit ? 'font-semibold text-cerulean-blue-800' : ''
              }`}
            >
              Edit
            </h1>
          </button>
        )}
        <div className={` ${isExpandEdit ? 'block' : 'hidden'}`}>
          <form className="p-2 px-5">
            <div className="flex flex-col">
              <p className="text-sm font-normal text-stone-600 py-1">Title</p>
              <div className="flex gap-2">
                <Input type="text" name="title" width="45" />
                <button
                  type="submit"
                  className="flex justify-center rounded-full border-2 p-2 px-4 text-cerulean-blue-800 font-semibold hover:border-cerulean-blue-800"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <form className="flex flex-col gap-5 px-5" onSubmit={handleSubmitCreate}>
        <div className="flex flex-col">
          <button
            type="button"
            className="flex items-center gap-2 text-stone-600 border p-2 rounded-lg hover:border-cerulean-blue-800"
            onClick={handleExpandCreate}
          >
            <span>{!isExpandCreate ? <MdAdd /> : <MdRemove />}</span>
            <h1
              className={`${
                isExpandCreate ? 'font-semibold text-cerulean-blue-800' : ''
              }`}
            >
              Create new Brands
            </h1>
          </button>
        </div>

        <div className={` ${isExpandCreate ? 'block' : 'hidden'}`}>
          <div className="px-5">
            <p className="text-sm font-normal text-stone-600 py-1">Title</p>
            <Input
              type="text"
              name="title"
              onChange={handleChangeInput}
              value={input.title}
              error={error.title}
              width="45"
            />
          </div>
          <button
            type="submit"
            className="flex justify-center rounded-full border-2 py-4 px-5 text-white bg-cerulean-blue-800 font-semibold  "
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
