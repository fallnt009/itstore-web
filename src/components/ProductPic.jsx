import productBlank from '../assets/productPhotoBlank.jpg';

export default function ProductPic({src, size, borderSize}) {
  return (
    <img
      src={src || productBlank}
      className={``}
      alt="product"
      width={size}
      height={size}
    />
  );
}
