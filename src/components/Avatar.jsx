import profileImage from '../assets/blank.png';

export default function Avatar({src, size, borderSize}) {
  return (
    <img
      src={src || profileImage}
      className={`rounded-full cursor-pointer `}
      alt="user"
      width={size}
      height={size}
    />
  );
}
