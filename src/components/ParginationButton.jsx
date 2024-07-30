export default function ParginationButton({page, totalPages, handleChange}) {
  console.log(page);
  const buttons = [];
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(
      <button
        className={`rounded-full py-2 px-4 text-base border ${
          page === i ? 'bg-cerulean-blue-800 text-white font-semibold' : ''
        } hover:bg-stone-400 hover:text-white hover:font-semibold`}
        key={i}
        onClick={() => handleChange(i)}
      >
        {i}
      </button>
    );
  }
  return buttons;
}
