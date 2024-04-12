export default function RegisterForm() {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        className="rounded-md border-2 p-2"
        placeholder="first name"
      />
      <input
        type="text"
        className="rounded-md border-2 p-2"
        placeholder="last name"
      />
      <input
        type="email"
        className="rounded-md border-2 p-2"
        placeholder="email"
      />
      <input
        type="text"
        className="rounded-md border-2 p-2"
        placeholder="mobile"
      />
      <input
        type="password"
        className="rounded-md border-2 p-2"
        placeholder="password"
      />
      <input
        type="password"
        className="rounded-md border-2 p-2"
        placeholder="confirm password"
      />
      <button className="rounded-md border-2 p-2 hover:bg-cerulean-blue-200">
        Register
      </button>
    </form>
  );
}
