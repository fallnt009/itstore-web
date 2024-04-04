import NavbarItem from './NavbarItem';

export default function Navbar() {
  // const navbarMenu = ['Home', 'Our Work', 'Tracking Site', 'Contact Us'];
  const newNav = [
    {id: 1, title: 'Home', pathname: '/'},
    {id: 2, title: 'Our Work', pathname: '/ourwork'},
    {id: 3, title: 'Tracking Site', pathname: '/tracking'},
    {id: 4, title: 'Contact Us', pathname: '/contactus'},
  ];

  return (
    <div>
      <div className="bg-cerulean-blue-800 ">
        <div className="flex justify-around mx-10 text-center content-center p-3 text-xl font-semibold text-white">
          {newNav.map((el) => (
            <NavbarItem key={el.id} to={el.pathname}>
              {el.title}
            </NavbarItem>
          ))}
        </div>
      </div>
    </div>
  );
}
