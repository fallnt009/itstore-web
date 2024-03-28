export default function Navbar() {
  const navbarMenu = ['Home', 'Our Work', 'Tracking Site', 'Contact Us'];

  return (
    <div>
      <div className="bg-cerulean-blue-800 ">
        <div className="flex mx-10 text-center content-center p-3 text-xl font-semibold text-white">
          {navbarMenu.map((el) => (
            <div className="flex-1">{el}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
