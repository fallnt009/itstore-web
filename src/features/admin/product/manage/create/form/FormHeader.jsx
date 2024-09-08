import {ImCross} from 'react-icons/im';

export default function FormHeader({closeDrawer, title}) {
  return (
    <header className="grid grid-cols-[1fr_6fr] p-2 font-semibold text-lg ">
      <span
        className="flex items-center justify-center  text-stone-400 hover:text-cerulean-blue-800 cursor-pointer"
        onClick={closeDrawer}
      >
        <ImCross />
      </span>
      <h4 className="flex justify-center items-center text-cerulean-blue-800">
        {title}
      </h4>
    </header>
  );
}
