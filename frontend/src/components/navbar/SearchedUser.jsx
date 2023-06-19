import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

function SearchedUser({ data, closeModal }) {
  const { username, fullname, imageUrl } = data;
  const navigate = useNavigate();

  const handleViewProfile = () => {
    closeModal();
    navigate(`/profile/${username}`);
  };

  return (
    <div>
      <p className="text-2xl font-semibold mb-5">Result: </p>
      <div className="flex flex-row rounded-lg shadow-lg border-1 border-solid p-2 ">
        <img
          src={imageUrl}
          alt="profile"
          className="h-28 w-28 rounded-full object-cover"
          data-testid="user-avatar"
        />
        <div className="mx-20 flex flex-col gap-3">
          <p className="text-3xl">{fullname}</p>
          <p className="text-xl text-gray-500" data-testid="user-name">
            {username}
          </p>
          <Button
            data-testid="view-profile-button"
            text="View Profile"
            onClick={handleViewProfile}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchedUser;
