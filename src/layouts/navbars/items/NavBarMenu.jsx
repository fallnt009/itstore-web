export default function NavBarMenu({onOpen, isOpen, currentIndex}) {
  const Items = [
    {id: 1, title: 'Explore Product'},
    {id: 2, title: 'Promotion'},
    {id: 3, title: ' Services'},
  ];
  return (
    <div className="flex justify-start text-xl  text-indigo-700 gap-7 px-10 select-none">
      {Items.map((item, index) => (
        <div
          className={`h-10 cursor-pointer pb-2 ${
            currentIndex === index && isOpen
              ? 'border-b-4 font-semibold border-indigo-700'
              : 'hover:border-b-4 hover:font-semibold hover:border-indigo-700'
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
