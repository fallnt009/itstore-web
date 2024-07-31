import {MdDriveFolderUpload} from 'react-icons/md';

import ActiveButton from '../../../components/ActiveButton';

export default function PanelProductUpload() {
  //upload multiple images
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
            <div className="flex justify-center flex-col border-2 border-dashed py-11 cursor-pointer">
              <div className="flex flex-col justify-center items-center ">
                <MdDriveFolderUpload size={50} />
                <h1>Click to Upload</h1>
              </div>
            </div>
            <div className="py-2 px-5">
              <ActiveButton
                activeTitle="Submit"
                inActiveTitle="Submit"
                select={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
