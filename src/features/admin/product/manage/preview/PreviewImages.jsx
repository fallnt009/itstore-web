import NoImage from '../../../../../assets/productNoImage.jpg';

export default function PreviewImages({images}) {
  return (
    <div className="px-5 py-2 grid grid-cols-4">
      {images && images.length > 0 ? (
        images.map((item) => (
          <div key={item.id} className="flex justify-center">
            <img
              src={item.path || NoImage}
              alt="preview"
              className="max-h-[150px] max-w-[150px] object-cover rounded-lg shadow-xl"
            />
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center col-span-4">
          <img
            src={NoImage}
            alt="No images available"
            className="max-h-[150px] max-w-[150px] object-cover"
          />
        </div>
      )}
    </div>
  );
}
