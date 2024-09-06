import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import {MdClose} from 'react-icons/md';

import useAdmin from '../../../../../../../hooks/useAdmin';
import useLoading from '../../../../../../../hooks/useLoading';

import Input from '../../../../../../../components/Input';
import validateSpecProduct from '../../../../../../../validators/validate-specProduct';

import {
  UNEXPECTED_ERROR,
  UPDATE_SUCCESS,
} from '../../../../../../../config/messages';

export default function SpecProductEdit({onClose, prevData, dataForm, title}) {
  const {editSpecProduct} = useAdmin();
  const {startLoading, stopLoading} = useLoading();

  const [input, setInput] = useState({text: ''});
  const [error, setError] = useState({});

  //use Edit
  //show previous text
  useEffect(() => {
    if (prevData) {
      setInput({text: prevData.text || ''});
    }
  }, [prevData]);

  const handleOnChangeInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  };
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    startLoading();
    const result = validateSpecProduct(input);

    try {
      if (result) {
        setError(result);
      } else {
        setError({});

        //call api id,data
        const res = await editSpecProduct(prevData.id, input);
        if (res.status === 200) {
          toast.success(UPDATE_SUCCESS);
        } else {
          toast.error(res.data.descEn);
        }
      }
    } catch (err) {
      //toast error
      toast.error(UNEXPECTED_ERROR);
    } finally {
      stopLoading();
      onClose();
    }
  };

  return (
    <form
      className="w-full px-5 py-2 pb-5 text-gray-600"
      onSubmit={handleSubmitUpdate}
    >
      <div className="flex justify-between text-base font-semibold pb-4">
        <h1>Edit Text</h1>
        <button type="button" onClick={onClose}>
          <MdClose />
        </button>
      </div>
      <div>
        <h4 className="py-2">Text</h4>
        <Input
          name="text"
          value={input.text}
          error={error.title}
          onChange={handleOnChangeInput}
        />
      </div>
      <div className="flex justify-end py-4">
        <button
          type="submit"
          className="flex items-center gap-1 p-2 bg-indigo-600 hover:text-indigo-600 hover:border-indigo-600 hover:bg-white border rounded-lg text-white px-4 font-semibold"
        >
          Save
        </button>
      </div>
    </form>
  );
}
