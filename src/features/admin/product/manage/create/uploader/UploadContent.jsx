import MultiUploader from '../../../../../../components/MultiUploader';

export default function UploadContent({selectImage, setSelectImage}) {
  return (
    <>
      <MultiUploader select={selectImage} setSelect={setSelectImage} />
    </>
  );
}
