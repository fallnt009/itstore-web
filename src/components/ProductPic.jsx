import productBlank from '../assets/productNoImage.jpg';

export default function ProductPic({src, size, borderSize}) {
  return (
    <img
      src={src || productBlank}
      className={`cursor-pointer hover:border-2 h-full object-contain`}
      alt="product"
      width={size}
      height={size}
    />
  );
}
