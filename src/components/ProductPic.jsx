import productBlank from '../assets/productPhotoBlank.jpg';

export default function ProductPic({src, size, borderSize}) {
  return (
    <img
      src={src || productBlank}
      className={`cursor-pointer hover:border-2 h-full `}
      alt="product"
      width={size}
      height={size}
    />
  );
}
