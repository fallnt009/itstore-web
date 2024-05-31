export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <>
      <input
        className={` rounded-md border-2 p-2 bg-gray-50 focus:outline-none  ${
          error ? 'border-red-500 ' : 'focus:border-blue-500'
        }`}
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-red-500">{error}</div>}
    </>
  );
}
