import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="h-7 items-center">
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="m-0 p-0 flex items-center gap-2 cursor-pointer select-none"
      >
            <img
            src={user?.image}
            alt={`${user?.firstName}'s avatar`}
            className="w-8 h-8  rounded-full object-cover bg-gray-200"
            />
            {user?.firstName || 'User'} ▼ 
      </span>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white  rounded shadow z-10">
          <div className="px-4 py-2 text-gray-700">{user?.firstName}</div>
          <Link
            to="/profile"
            className="block px-4 py-2 hover:bg-gray-100 text-black"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
          <Link
            to="/profile"
            className="block px-4 py-2 hover:bg-gray-100 text-black"
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>
          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
