export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
  maxLength,
  width = 'full',
}) {
  return (
    <>
      <input
        className={`rounded-md border-2 p-2 bg-gray-50 w-${width} focus:outline-none  ${
          error ? 'border-red-500 ' : 'focus:border-blue-500'
        }`}
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      {error && <div className="px-2 py-2 text-red-500">*{error}</div>}
    </>
  );
}
