export default function InputBox({title, type}) {
  return (
    <div className="flex flex-col gap-1">
      <small>{title}</small>
      <input className=" rounded-md p-2 border-2" type={type} />
    </div>
  );
}
