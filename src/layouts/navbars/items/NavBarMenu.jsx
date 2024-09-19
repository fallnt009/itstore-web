export default function NavBarMenu({onOpen, isOpen, currentIndex}) {
  const Items = [
    {id: 1, title: 'Promotion'},
    {id: 2, title: ' Services'},
  ];
  return (
    <div className="flex justify-start text-xl  text-indigo-700 gap-7 px-10  select-none">
      {Items.map((item, index) => (
        <div
          className={`h-10 cursor-pointer border-b-4 border-gray-100 pb-2 ${
            currentIndex === index && isOpen
              ? 'font-semibold border-indigo-700'
              : 'hover:font-semibold hover:border-indigo-700'
          }`}
          key={item.id}
          onClick={() => onOpen(index)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}
