export default function PanelMenuItem({icon, title, width, navigate}) {
  return (
    <div
      className={`flex items-center gap-2 border-2 p-2 rounded-md  cursor-pointer hover:border-cerulean-blue-800 hover:font-semibold w-${width}`}
      onClick={navigate}
    >
      <span>{icon}</span>
      <h1>{title}</h1>
    </div>
  );
}
