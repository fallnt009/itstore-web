import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {MdArrowBack} from 'react-icons/md';
import {toast} from 'react-toastify';

import {SPEC_ITEM_MAIN} from '../../../../../../config/routing';
import {
  CREATE_SUCCESS,
  UNEXPECTED_ERROR,
} from '../../../../../../config/messages';
import ManageBreadCrumb from '../../breadcrumb/ManageBreadCrumb';

import Input from '../../../../../../components/Input';
import validateCategory from '../../../../../../validators/validate-category';

import useProduct from '../../../../../../hooks/useProduct';

const dataForm = {
  title: '',
};

export default function SpecCreate() {
  const [input, setInput] = useState(dataForm);
  const [error, setError] = useState({});

  const {createSpecItem} = useProduct();

  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(SPEC_ITEM_MAIN);
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    const result = validateCategory(input);
    try {
      if (result) {
        setError(result);
      } else {
        setError({});
        //create
        const res = await createSpecItem(input);
        if (res) {
          toast.error(res);
        } else {
          toast.success(CREATE_SUCCESS);
        }
        //
      }
    } catch (err) {
      //err
      toast.error(UNEXPECTED_ERROR);
    }
  };

  const handleChangeInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  };

  return (
    <div className="px-40 pb-10">
      <div>
        <ManageBreadCrumb />
        <div className="py-5 px-10 border rounded-lg text-stone-800 shadow-md">
          <div className="flex gap-1 items-center py-5">
            <button
              type="button"
              className="text-cerulean-blue-600"
              onClick={handleClickBack}
            >
              <MdArrowBack />
            </button>
            <h1 className="font-bold">Create Spec </h1>
          </div>
          <form
            className="flex flex-col gap-2 text-sm"
            onSubmit={handleSubmitCreate}
          >
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">Name</h4>
              <Input
                name="title"
                value={input.title}
                error={error.title}
                onChange={handleChangeInput}
              />
            </div>

            <div className="flex py-2 text-xs ">
              <button
                type="submit"
                className="p-2 px-3 rounded-lg bg-cerulean-blue-600 text-white hover:bg-stone-400"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
