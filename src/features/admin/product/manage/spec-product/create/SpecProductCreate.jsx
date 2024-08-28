import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';

import useAdmin from '../../../../../../hooks/useAdmin';
import useProduct from '../../../../../../hooks/useProduct';
import useLoading from '../../../../../../hooks/useLoading';

import {UNEXPECTED_ERROR} from '../../../../../../config/messages';

import SpecProductCreateContent from './SpecProductCreateContent';
import CreatePopupContent from './popup/CreatePopupContent';

import Popup from '../../../../../../components/Popup';

export default function SpecProductCreate({bcs, product}) {
  const {specItems, fetchSpecItem} = useAdmin();
  const {fetchProductSpecByProductId} = useProduct();
  const {startLoading, stopLoading} = useLoading();

  const [specDetail, setSpecDetail] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const productId = product?.id;
  const subCategoryId = bcs?.subCategoryId;

  useEffect(() => {
    const fetchSpec = async () => {
      startLoading();
      try {
        if (subCategoryId) {
          await fetchSpecItem(subCategoryId);
        }
        if (productId) {
          const res = await fetchProductSpecByProductId(productId);
          setSpecDetail(res.ProductSubSpecs);
        }
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
      } finally {
        stopLoading();
      }
    };
    fetchSpec();
  }, [fetchSpecItem, fetchProductSpecByProductId, subCategoryId, productId]);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="py-5">
      <SpecProductCreateContent
        specItems={specItems}
        specDetail={specDetail}
        onOpenPopup={handleOpenPopup}
      />
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        <CreatePopupContent onClose={handleClosePopup} />
      </Popup>
    </div>
  );
}
