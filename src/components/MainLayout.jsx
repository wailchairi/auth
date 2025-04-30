import { Link ,Outlet } from 'react-router-dom';
import UserDropdown from './UserDropdown';

const Navbar = () => {
  return (
    <>
    <nav className="w-full bg-[#F6F7FB] py-5 px-8 shadow-sm p-6 flex justify-between items-center">
      <Link to="/home" className="text-xl font-bold text-[#234781] mr-8">Home</Link>

      <div className="flex items-center text-gray-800 font-medium">
        
      <div className="flex items-center text-gray-800 font-medium">
        <UserDropdown />
      </div>


      </div>
    </nav>
    <main >
    <Outlet /> 
  </main>
  <footer>
    <hr className="border-t border-gray-200 my-8" />
        <p className='flex items-center justify-center m-8 '>React App &copy; {new Date().getFullYear()}</p>
  </footer>
    
  </>
  );
};

export default Navbar;
