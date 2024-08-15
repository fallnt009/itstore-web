import {useState} from 'react';
import {toast} from 'react-toastify';

import useProduct from '../../../../../hooks/useProduct';

import validateProduct from '../../../../../validators/validate-product';

import Input from '../../../../../components/Input';

const dataForm = {
  title: '',
  price: '',
  description: '',
  qtyInStock: 0,
};

export default function PanelProductCreate({
  bcsId,
  setProductId,
  setSubmitStatus,
}) {
  const [input, setInput] = useState(dataForm);
  const [error, setError] = useState({});

  const {addNewProduct} = useProduct();
  // create and return value

  const handleChangeInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  };

  const handleSubmitCreate = async (e) => {
    try {
      e.preventDefault();
      //validate
      const result = validateProduct(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        //create
        const res = await addNewProduct(bcsId, input);
        //return value
        //set value of productId
        setProductId(res.id);
        setSubmitStatus(true);
        toast.success('Product Created Success');
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className="px-10 py-5">
      <div className="grid pb-5">
        <div>
          <h1 className="text-3xl text-cerulean-blue-800 py-8">
            Let's Fill Some Information about this product
          </h1>
          <div className="flex items-center gap-5">
            <h1 className="text-xl font-semibold text-cerulean-blue-800">
              Step 3 : Fill Product Info
            </h1>
          </div>
          <div className="py-5 px-2">
            <form
              className="flex flex-col justify-start gap-2"
              onSubmit={handleSubmitCreate}
            >
              <div className="flex flex-col gap-1">
                <h4 className="text-stone-600">Product Name</h4>
                <Input
                  type="text"
                  name="title"
                  onChange={handleChangeInput}
                  value={input.title}
                  error={error.title}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-stone-600">Price</h4>
                <Input
                  width="32"
                  type="text"
                  name="price"
                  onChange={handleChangeInput}
                  value={input.price}
                  error={error.price}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-stone-600">Description</h4>
                <Input
                  type="text"
                  name="description"
                  onChange={handleChangeInput}
                  value={input.description}
                  error={error.description}
                />
              </div>
              <div className="flex flex-col  gap-1">
                <h4 className="text-stone-600">Quantity</h4>
                <Input
                  width="24"
                  type="number"
                  name="qtyInStock"
                  onChange={handleChangeInput}
                  value={input.qtyInStock}
                  error={error.qtyInStock}
                />
              </div>
              <div className="py-4">
                <button
                  type="submit"
                  className="flex justify-center rounded-lg border-2 p-4  text-white bg-cerulean-blue-800 font-semibold"
                >
                  Submit Product Data
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
