import React from "react";
import UserProfileComponent from "../components/UserProfileComponent";

function UserProfile({ userInformation }) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>
        <strong>UID:</strong>
        {userInformation.uid}
      </p>
      <p>
        <strong>Email::</strong>
        {userInformation.email}
      </p>

      <UserProfileComponent userInformation={userInformation} />
    </div>
  );
}

export default UserProfile;
