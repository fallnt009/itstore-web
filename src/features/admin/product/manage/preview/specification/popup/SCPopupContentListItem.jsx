import {toast} from 'react-toastify';
import {MdDelete} from 'react-icons/md';

import useProduct from '../../../../../../../hooks/useProduct';

import {DELETE_SUCCESS} from '../../../../../../../config/messages';

export default function SCPopupContentListItem({
  item,
  specDetailId,
  productId,
}) {
  const {deleteSpecDetail} = useProduct();

  const handleRemoveItem = async (id) => {
    try {
      const specDetailId = id;
      const specProductId = item.id;

      const res = await deleteSpecDetail(
        specDetailId,
        specProductId,
        productId
      );
      if (res.status === 200) {
        toast.success(DELETE_SUCCESS);
      } else {
        toast.error(res.data.descEn);
      }
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-[0.5fr_1fr_0.5fr_6fr_1fr] py-2 px-2 border-b">
      <div>{item.id}</div>
      {item.value ? (
        <>
          <div className="flex justify-center gap-4">
            <h4>{item.value}</h4>
          </div>
          <span className="flex justify-center">X</span>
        </>
      ) : (
        <>
          <div className="flex justify-center gap-4">
            <></>
          </div>
          <span></span>
        </>
      )}
      <h4>{item.text}</h4>
      <div className="flex items-center justify-center gap-2">
        {/* <button type="button">
      <MdEdit size={15} />
    </button> */}
        <button
          type="button"
          className="text-red-500"
          onClick={() => handleRemoveItem(specDetailId)}
        >
          <MdDelete size={15} />
        </button>
      </div>
    </div>
  );
}
