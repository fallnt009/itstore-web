import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import {MdWarning} from 'react-icons/md';

import useProduct from '../../../../../../../../hooks/useProduct';

import Input from '../../../../../../../../components/Input';
import {
  UNEXPECTED_ERROR,
  CREATE_SUCCESS,
} from '../../../../../../../../config/messages';

export default function SpecDetailAdd({specItemObj, product}) {
  const {specProduct, fetchSpecProduct, addSpecDetail} = useProduct();
  const [input, setInput] = useState({value: '', desc: '', specProductId: ''});
  const [error, setError] = useState('');
  //selectedSpecProductId
  const [selectSpecProductId, setSpecProductId] = useState(null);

  const {id: SpecItemId} = specItemObj;
  const {id: ProductId, ProductSubCategory} = product;
  const subCategoryId = ProductSubCategory.BrandCategorySub.subCategoryId || '';

  //fetch data here
  useEffect(() => {
    const fetchData = async () => {
      try {
        //send SubcategoryId
        const res = await fetchSpecProduct(SpecItemId, subCategoryId);

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
  }, [fetchSpecProduct, SpecItemId]);

  const handleChangeInput = (e) => {
    const {name, value, type} = e.target;

    if (type === 'select-one') {
      setSpecProductId(value);
      setInput((prevState) => ({...prevState, specProductId: value}));
    } else {
      setInput({...input, [name]: value});
    }
  };

  const handleSubmitAdd = async (e) => {
    // get specProductId / and productId
    //create
    e.preventDefault();
    try {
      const res = await addSpecDetail(ProductId, input);

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
  //filter specProduct By SubCategoryID

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
          <div className="flex flex-col gap-1 w-24">
            <h4>Value</h4>
            <Input
              type="number"
              name="value"
              value={input.value}
              onChange={handleChangeInput}
              min="0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-baseline">
              <h4>Description</h4>
              <p className="text-xs text-red-500">*optional</p>
            </div>
            <Input
              type="text"
              name="desc"
              value={input.desc}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <h4>Select Text</h4>
            <select
              className={`border rounded-lg shadow-inner p-2 ${
                error && 'border-red-500 border-2'
              }`}
              onChange={handleChangeInput}
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
        </div>
        <div className="flex justify-end pt-3">
          <button
            type="submit"
            className={`p-2 px-4 border rounded-lg font-semibold shadow ${
              input.specProductId || input.desc
                ? 'bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 hover:border-indigo-600'
                : 'bg-gray-400 text-white cursor-not-allowed'
            }`}
            disabled={!input.specProductId || !input.desc}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
