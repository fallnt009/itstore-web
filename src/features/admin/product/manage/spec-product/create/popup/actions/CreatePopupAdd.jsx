import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import {MdWarning} from 'react-icons/md';

import useProduct from '../../../../../../../../hooks/useProduct';

// import Input from '../../../../../../../../components/Input';
// import TextArea from '../../../../../../../../components/TextArea';
import {
  UNEXPECTED_ERROR,
  CREATE_SUCCESS,
} from '../../../../../../../../config/messages';

export default function CreatePopupAdd({specItemId, product}) {
  const {specProduct, fetchSpecProduct, addSpecDetail} = useProduct();

  const [error, setError] = useState('');

  //selectedSpecProductId
  const [selectProductId, setProductId] = useState(null);
  const [selectSpId, setSpId] = useState(null);

  //fetch data here
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchSpecProduct(specItemId);
        if (product) {
          setProductId(product.id);
        }
        if (res.status === 200) {
          setError('');
        } else {
          setError(res.data.descEn);
        }
      } catch (err) {
        //network error
        console.log(UNEXPECTED_ERROR);
      }
    };
    fetchData();
  }, [fetchSpecProduct, specItemId, product]);

  const handleOnChangeOption = (e) => {
    setSpId(e.target.value);
  };

  const handleSubmitAdd = async (e) => {
    // get specProductId / and productId
    //create
    e.preventDefault();
    try {
      const res = await addSpecDetail(selectSpId, selectProductId);

      if (res.status === 200) {
        setError('');
        toast.success(CREATE_SUCCESS);
      } else {
        setError(res.data.descEn);
        toast.error(res.data.descEn);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="border px-2 py-3 rounded-lg shadow-md"
      onSubmit={handleSubmitAdd}
    >
      <div className="px-2 font-semibold py-2">
        <h1>Add new</h1>
      </div>
      <div className="px-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 ">
            <h4>Select Text</h4>
            <select
              className={`border rounded-lg p-2 ${
                error && 'border-red-500 border-2'
              }`}
              onChange={handleOnChangeOption}
            >
              <option value="">Choose Text</option>
              {specProduct?.map((item) => (
                <option key={item.id} value={item.id} className="flex">
                  {item.value}
                  {item.text}
                </option>
              ))}
            </select>
            <div className="text-xs py-1">
              {error ? (
                <div className="flex items-center gap-2 text-red-500">
                  <span>
                    <MdWarning />
                  </span>
                  {error}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          {/* <div className="flex flex-col gap-1 w-24">
            <h4>Value</h4>
            <Input type="number" />
          </div>
          <div className="flex flex-col gap-1">
            <h4>Text</h4>
            <TextArea type="text" rows={2} />
          </div> */}
        </div>
        <div className="flex justify-end pt-3">
          {selectProductId && selectSpId ? (
            <button
              type="submit"
              className="p-2 px-4 border rounded-lg font-semibold text-white bg-indigo-600 hover:bg-white hover:border-indigo-600 hover:text-indigo-600 shadow"
            >
              Add
            </button>
          ) : (
            <div
              type="submit"
              className="p-2 px-4 border rounded-lg font-semibold text-white bg-gray-400 shadow"
            >
              Add
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
