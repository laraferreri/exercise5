import React from "react";
import UserProfileComponent from "../components/UserProfileComponent";

function UserProfile({ userInformation }) {
  return (
    <div>
      <p>
        <strong>UID:</strong>
        {userInformation.uid}
      </p>
      <p>
        <strong>Email::</strong>
        {userInformation.email}
      </p>

      <h1>User Profile</h1>
      <UserProfileComponent userInformation={userInformation} />
    </div>
  );
}

export default UserProfile;
