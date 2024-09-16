export default function NavBarMenu({onOpen, onClose, currentIndex}) {
  const Items = [
    {id: 1, title: 'Explore Product'},
    {id: 2, title: 'Promotion'},
    {id: 3, title: ' Services'},
  ];
  return (
    <div className="flex justify-start text-xl  text-cerulean-blue-800 gap-7 px-10 border-b-2">
      {Items.map((item, index) => (
        <div
          className={`h-10 cursor-pointer  pb-2 ${
            currentIndex === index
              ? 'border-b-4 font-semibold border-cerulean-blue-800'
              : 'hover:border-b-4 hover:font-semibold hover:border-cerulean-blue-800'
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
