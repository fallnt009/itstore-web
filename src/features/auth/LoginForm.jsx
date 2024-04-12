export default function LoginForm() {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        className="rounded-md border-2 p-2"
        placeholder="email"
      />
      <input
        type="password"
        className="rounded-md border-2 p-2"
        placeholder="password"
      />
      <button className="rounded-md border-2 p-2 hover:bg-cerulean-blue-200">
        Log In
      </button>
    </form>
  );
}
