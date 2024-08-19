import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';

import validateCategory from '../../../../../validators/validate-category';

import useAdmin from '../../../../../hooks/useAdmin';
import useLoading from '../../../../../hooks/useLoading';

import FormHeader from '../drawerForm/FormHeader';
import FormContent from '../drawerForm/FormContent';
import FormPreview from '../drawerForm/FormPreview';
import FormCreate from '../drawerForm/FormCreate';

import {
  CREATE_SUCCESS,
  UPDATE_SUCCESS,
  UNEXPECTED_ERROR,
} from '../../../../../config/messages';

const dataForm = {title: ''};

export default function SubCategoryForm({closeDrawer}) {
  const [input, setInput] = useState(dataForm);
  const [error, setError] = useState({});
  const [isSelect, setIsSelect] = useState(null);
  const [expandSection, setExpandSection] = useState(null);

  const {subCategory, addSubCategory, editSubCategory, fetchSubCategory} =
    useAdmin();
  const {startLoading, stopLoading} = useLoading();

  useEffect(() => {
    fetchSubCategory();
  }, [fetchSubCategory]);

  const handleExpand = (section) => {
    setExpandSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const handleChangeInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  };

  const handleSubmitEdit = async (e) => {
    try {
      e.preventDefault();

      const result = validateCategory(input);
      startLoading();
      if (result) {
        setError(result);
      } else {
        setError({});
        const res = await editSubCategory(isSelect.id, input);
        if (res) {
          toast.error(res);
        } else {
          toast.success(UPDATE_SUCCESS);
        }

        await fetchSubCategory();

        setIsSelect(null);
        setExpandSection(null);
        setInput(dataForm);
      }
    } catch (err) {
      toast.error(UNEXPECTED_ERROR);
    } finally {
      stopLoading();
    }
  };

  const handleSubmitCreate = async (e) => {
    try {
      e.preventDefault();
      const result = validateCategory(input);
      startLoading();
      if (result) {
        setError(result);
      } else {
        setError({});
        //call api
        const res = await addSubCategory(input);
        if (res) {
          toast.error(res);
        } else {
          toast.success(CREATE_SUCCESS);
        }

        // call fetch again
        await fetchSubCategory();

        //clear data form
        setExpandSection(null);
        setInput(dataForm);
      }
    } catch (err) {
      toast.error(UNEXPECTED_ERROR);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="flex flex-col gap-5 px-5 py-5">
      <FormHeader title="Manage Sub Category" closeDrawer={closeDrawer} />
      <div className="flex flex-col gap-5 px-5">
        <FormContent
          data={subCategory}
          title="Sub Category Lists"
          desc="Select Sub Category to edit"
          isSelect={isSelect}
          setIsSelect={setIsSelect}
        />
        <FormPreview
          title="Sub Category"
          input={input}
          error={error}
          isSelect={isSelect}
          onChange={handleChangeInput}
          onSubmit={handleSubmitEdit}
          onExpand={handleExpand}
          expandSection={expandSection}
        />
        <FormCreate
          title="Sub Category"
          input={input}
          error={error}
          isSelect={isSelect}
          onChange={handleChangeInput}
          onSubmit={handleSubmitCreate}
          onExpand={handleExpand}
          expandSection={expandSection}
        />
      </div>
    </div>
  );
}
