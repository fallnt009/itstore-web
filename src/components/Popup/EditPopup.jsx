import {useEffect, useState} from 'react';
import {MdClose} from 'react-icons/md';

import Input from '../../components/Input';

export default function EditPopup({
  onCLose,
  onSubmit,
  prevData,
  dataForm,
  title,
}) {
  const [input, setInput] = useState(dataForm);
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
    //validate
    //if error setError
    //else await update
  };

  return (
    <div className="w-full px-5 py-2 pb-5 text-gray-600">
      <div className="flex justify-between text-base font-semibold pb-4">
        <h1>Edit {title}</h1>
        <button onClick={onCLose}>
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
          type="button"
          className="flex items-center gap-1 p-2 bg-indigo-600 hover:text-indigo-600 hover:border-indigo-600 hover:bg-white border rounded-lg text-white px-4 font-semibold"
        >
          Save
        </button>
      </div>
    </div>
  );
}
