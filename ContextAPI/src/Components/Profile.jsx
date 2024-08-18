import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import "./Profile.css"; // Import the CSS file for styling

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div className="profile-container">
                <p className="profile-message">Please login to access your profile</p>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <h2 className="profile-welcome">Welcome, {user.username}!</h2>
        </div>
    );
}

export default Profile;
