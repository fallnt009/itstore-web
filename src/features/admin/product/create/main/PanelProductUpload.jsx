import {useState} from 'react';
import {toast} from 'react-toastify';

import useAdmin from '../../../../../hooks/useAdmin';

import ActiveButton from '../../../../../components/ActiveButton';
import MultiUploader from '../../../../../components/MultiUploader';

export default function PanelProductUpload({productId}) {
  const {createProductImages} = useAdmin();
  const [selectedImages, setSelectedImages] = useState([]);

  //after create send product that create to this

  const handleSubmit = async () => {
    const formData = new FormData();
    selectedImages.forEach((imgObj, index) => {
      formData.append('productImage', imgObj.file);
    });

    try {
      //need product id
      //send API  //need to get brand
      await createProductImages(productId, formData);
      //clear image
      setSelectedImages([]);
      toast.success('Upload Success');
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className="px-10 py-5">
      <div className="grid pb-5">
        <div>
          <h1 className="text-3xl text-cerulean-blue-800 py-8">
            Almost Done! Let's Upload some images of this product
          </h1>
          <div className="flex items-center gap-5">
            <h1 className="text-xl font-semibold text-cerulean-blue-800">
              Step 3 : Image Upload
            </h1>
          </div>
          <div className="flex flex-col py-5 px-2">
            <div className="py-5">
              <MultiUploader
                select={selectedImages}
                setSelect={setSelectedImages}
              />
            </div>
            <div className="py-2 px-5">
              <ActiveButton
                activeTitle="Submit"
                inActiveTitle="Submit"
                select={true}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
