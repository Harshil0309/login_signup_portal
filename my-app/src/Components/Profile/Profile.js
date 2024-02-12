import React, { useState } from "react";
import basestyle from "../Base.module.css";

const Profile = ({ setUserState, username }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="profile">
      <h1 style={{ color: "white" }}>Welcome {username} !!</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {image && (
        <div>
          <h2>Selected Image Preview:</h2>
          <img src={URL.createObjectURL(image)} alt="Selected" />
        </div>
      )}
      <button
        className={basestyle.button_common}
        onClick={() => setUserState({})}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
