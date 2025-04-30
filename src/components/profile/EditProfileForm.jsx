
import {useNavigate} from "react-router-dom";

const EditProfileForm = ({ onCancel }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // This prevents the default form submission
    // Add your form submission logic here
    navigate("/home"); // Redirect to home after form submission
  };


    return (
      <div className="w-full max-w-5xl mx-auto mt-10 bg-white rounded-md shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
  
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
  
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-[#234781] text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default EditProfileForm;
  