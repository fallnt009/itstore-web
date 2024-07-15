export default function ErrorPage({error}) {
  return (
    <div className="container flex flex-col justify-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error}</i>
      </p>
    </div>
  );
}
