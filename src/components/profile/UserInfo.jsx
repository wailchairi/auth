import { useAuth } from '../../store/AuthContext';

const UserInfo = ({ onEdit }) => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 bg-white rounded-md shadow-sm p-6">
      <div className="flex justify-between items-start">
        {/* Left: Image + info */}
        <div className="flex items-center gap-6 m-8">
 
          <img
            src={user?.image }
            alt={`${user?.firstName}'s avatar`}
            
            className="w-40 h-40 rounded-full object-cover bg-gray-200"
          />

          {/* Name & Email */}
          <div>
            <h2 className="text-4xl font-semibold text-black">
              {user?.firstName} {user?.lastName}             
            </h2>
            <p className="text-gray-600 text-lg">{user?.email}</p>
          </div>
        </div>


        <button onClick={onEdit} className="text-[#234781] hover:underline text-lg">
          Edit profile
        </button>

      </div>
    </div>
  );
};

export default UserInfo;
