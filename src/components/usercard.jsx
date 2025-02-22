// write the component code here
import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/100"; 
  const name = "dj";
  const email = "dj13@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main St, Bangalore, India";

  return (
    <div className="max-w-sm p-4 bg-white shadow-lg rounded-xl border text-center">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 mx-auto rounded-full border"
      />
      <h2 className="text-xl font-semibold mt-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-gray-500 mt-2">{address}</p>
    </div>
  );
};

export default Usercard;
