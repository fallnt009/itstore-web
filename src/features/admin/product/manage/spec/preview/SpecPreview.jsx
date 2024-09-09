import {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import {MdArrowBack} from 'react-icons/md';

import useAdmin from '../../../../../../hooks/useAdmin';
import useLoading from '../../../../../../hooks/useLoading';

import ManageBreadCrumb from '../../utils/ManageBreadCrumb';
import SpecFilter from '../filter/SpecFilter';
import SpecPreviewContent from './SpecPreviewContent';
import SpecProductEdit from '../edit/popup/SpecProductEdit';
import SpecProductDelete from '../delete/popup/SpecProductDelete';

import Popup from '../../../../../../components/Popup';

import {SPEC_ITEM_MAIN} from '../../../../../../config/routing';
import {
  UNEXPECTED_ERROR,
  DELETE_SUCCESS,
} from '../../../../../../config/messages';

export default function SpecPreview() {
  const navigate = useNavigate();
  const location = useLocation();
  const {id} = useParams();
  const {title} = location.state || {};

  const {fetchSpecProduct, fetchSubCategory, deleteSpecProduct} = useAdmin();
  const {startLoading, stopLoading} = useLoading();

  //select data
  const [selectSubCategory, setSelectSubCategory] = useState(null);
  const [selectSpecProduct, setSelectSpecProduct] = useState(null);

  //popup
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [activePopup, setActivePopup] = useState(null);

  console.log(id, selectSubCategory);

  useEffect(() => {
    const fetchData = async () => {
      startLoading();
      try {
        await fetchSubCategory();
        await fetchSpecProduct(id, selectSubCategory);
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
      } finally {
        stopLoading();
      }
    };
    fetchData();
  }, [fetchSubCategory, fetchSpecProduct, id, selectSubCategory]);

  const handleOnClickBack = () => {
    navigate(SPEC_ITEM_MAIN);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setActivePopup(null);
  };

  const handleOpenPopupEdit = () => {
    setActivePopup('edit');
    setPopupOpen(true);
  };

  const handleOpenPopupDelete = () => {
    setActivePopup('delete');
    setPopupOpen(true);
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    startLoading();
    try {
      //call api
      const res = await deleteSpecProduct(selectSpecProduct.SpecProduct.id);
      if (res.status === 200) {
        toast.success(DELETE_SUCCESS);
      } else {
        toast.error(res.data.descEn);
      }
    } catch (err) {
      toast.error(UNEXPECTED_ERROR);
      //err
    } finally {
      stopLoading();
      setPopupOpen(false);
      setActivePopup(null);
    }
  };

  return (
    <div className="px-40 pb-10">
      <div>
        <ManageBreadCrumb />
        <div className="py-5 px-10 border rounded-lg text-stone-800 shadow-md">
          <div className="flex gap-1 items-center py-2">
            <button
              type="button"
              className="text-cerulean-blue-600"
              onClick={handleOnClickBack}
            >
              <MdArrowBack />
            </button>
            <h1 className="font-semibold text-indigo-600">Preview {title}</h1>
          </div>

          <div>
            <SpecFilter
              selectSubCategory={selectSubCategory}
              setSelectSubCategory={setSelectSubCategory}
            />
            <SpecPreviewContent
              onSelect={setSelectSpecProduct}
              onEdit={handleOpenPopupEdit}
              onDelete={handleOpenPopupDelete}
            />
          </div>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        {activePopup === 'edit' && (
          <SpecProductEdit
            onClose={handleClosePopup}
            prevData={selectSpecProduct.SpecProduct}
          />
        )}
        {activePopup === 'delete' && (
          <SpecProductDelete
            name="Text"
            prevData={selectSpecProduct.SpecProduct}
            onClose={handleClosePopup}
            onSubmit={handleDeleteSubmit}
          />
        )}
      </Popup>
    </div>
  );
}
