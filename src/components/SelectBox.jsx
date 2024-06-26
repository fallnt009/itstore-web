export default function SelectBox({isSelected, onSelect, onSelectItem, item}) {
  const {title, subTitle, description, subDescription} = item;

  const handleClickItem = () => {
    onSelect(item);
    onSelectItem(item);
  };
  return (
    <div
      className={`flex flex-col gap-1 mt-5 border-2 p-3 py-4 rounded-lg cursor-pointer ${
        isSelected
          ? 'border-cerulean-blue-800'
          : 'hover:border-cerulean-blue-800'
      }`}
      onClick={handleClickItem}
    >
      <div className="flex justify-between">
        <h4 className="font-semibold ">{title}</h4>
        <h4 className="font-semibold ">{subTitle}</h4>
      </div>

      <p className="text-sm text-stone-600">{description}</p>
      <p className="text-sm text-stone-600">{subDescription}</p>
    </div>
  );
}
