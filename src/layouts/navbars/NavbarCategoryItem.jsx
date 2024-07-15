import {useNavigate} from 'react-router-dom';

export default function NavbarCategoryItem({subCategory}) {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
    navigate(0);
  };
  return (
    <div>
      {subCategory?.map((item) => (
        <div
          key={item.id}
          className="flex font-normal text-base justify-start items-center cursor-pointer hover:text-cerulean-blue-800 hover:font-semibold "
          onClick={() => handleRedirect(item.pathname)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}
