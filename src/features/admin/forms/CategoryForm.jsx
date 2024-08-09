import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';

import validateCategory from '../../../validators/validate-category';

import useAdmin from '../../../hooks/useAdmin';
import useLoading from '../../../hooks/useLoading';

import FormHeader from './FormHeader';
import FormContent from './FormContent';
import FormPreview from './FormPreview';
import FormCreate from './FormCreate';

const dataForm = {title: ''};

export default function CategoryForm({closeDrawer}) {
  const [input, setInput] = useState(dataForm);
  const [error, setError] = useState({});
  const [isSelect, setIsSelect] = useState(null);
  const [expandSection, setExpandSection] = useState(null);

  const {mainCategory, addCategory, editCategory, fetchCategory} = useAdmin();
  const {startLoading, stopLoading} = useLoading();

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

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
        const res = await editCategory(isSelect.id, input);
        toast.success('Category Updated Success');

        await fetchCategory();

        setIsSelect(res);
        setExpandSection(null);
        setInput(dataForm);
      }
    } catch (err) {
      toast.error(err.response?.data.message);
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
        await addCategory(input);
        toast.success('Category Created Success');

        // call fetch again
        await fetchCategory();

        //clear data form
        setExpandSection(null);
        setInput(dataForm);
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="flex flex-col gap-5 px-5 py-5">
      <FormHeader title="Manage Category" closeDrawer={closeDrawer} />
      <div className="flex flex-col gap-5 px-5">
        <FormContent
          data={mainCategory}
          title="Category Lists"
          desc="Select category to edit"
          isSelect={isSelect}
          setIsSelect={setIsSelect}
        />
        <FormPreview
          title="Category"
          input={input}
          error={error}
          isSelect={isSelect}
          onChange={handleChangeInput}
          onSubmit={handleSubmitEdit}
          onExpand={handleExpand}
          expandSection={expandSection}
        />
        <FormCreate
          title="Category"
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
