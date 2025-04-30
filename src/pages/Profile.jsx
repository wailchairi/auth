import { useState } from "react";

import UserInfo from "../components/profile/UserInfo";
import EditProfileForm from "../components/profile/EditProfileForm";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
<>
      {isEditing ? (
        <EditProfileForm onCancel={() => setIsEditing(false)} />
      ) : (
        <UserInfo onEdit={() => setIsEditing(true)} />
      )}
</>
  );
};

export default Profile;




// const Profile = () => {
//   

// export default Profile;
