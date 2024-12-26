import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputField from "../../Components/Auth/InputField";
import Btn from "../../Components/HomePage/HeroSection/Btn";
import BtnContainer from "../../Components/HomePage/HeroSection/BtnContainer";
import { RootState } from "../../Store";
import {
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
} from "../../Store/Slices/userApi";
import { UpdateProfileRequest } from "../../Store/Types";
import { toastify } from "../../utils";
import "./Profile.css";
interface UpdateFormState {
  Name: string;
  Email: string;
  ProfilePhoto: File | null;
}
function Profile() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);
  const [fileUrl, setFileUrl] = useState(user?.profilePhoto);
  const [passChnage, setPassChange] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useUpdateProfileMutation();

  const [updatePassword, { isLoading: isUpdatePasswordLoading }] =
    useUpdatePasswordMutation();
  const [formState, setFormState] = useState<UpdateFormState>({
    Name: user?.name ?? "",
    Email: user?.email ?? "",
    ProfilePhoto: null,
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;
    if (files !== null && files[0] && files[0].type && files[0].size) {
      // profile photo file type validation
      if (!files[0].type.includes("image/")) {
        console.log("Please upload only image");
        toastify("Please upload only image", "error");
      } else if (files[0].size > 10485760) {
        console.log(
          "Please upload less than",
          (10485760 / (1024 * 1024)).toFixed(2)
        );
        toastify(
          `Please upload less than ${(10485760 / (1024 * 1024)).toFixed(2)} MB`,
          "error"
        );
      } else {
        setFileUrl(URL.createObjectURL(files[0]));
        // setErrors([]);
      }
    }
    setFormState((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassChange((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.Name.trim() === "" || formState.Email.trim() === "") {
      toastify("No empty fields allowed", "error");
      return;
    }
    const formData = new FormData();
    formData.append("Name", formState.Name);
    formData.append("Email", formState.Email);
    formData.append("ProfilePhoto", formState.ProfilePhoto ?? "");

    try {
      await updateProfile(formData as UpdateProfileRequest).unwrap();
      setIsEditing(false);
      toastify("Updated SuccessFully", "success");
    } catch (err: any) {
      if (err?.data && err.data?.message) {
        toastify(err.data.message, "error");
      } else {
        toastify("Unexpected Error Occured", "error");
        console.log(err);
      }
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      passChnage.currentPassword.trim() === "" ||
      passChnage.newPassword.trim() === ""
    ) {
      toastify("Password fields can't be empty", "error");
      return;
    }
    if (passChnage.currentPassword === passChnage.newPassword) {
      toastify("new password must be different from old password", "error");
      return;
    }
    try {
      const response = await updatePassword(passChnage).unwrap();
      console.log(response);
      toastify(response.message, "success");
    } catch (err: any) {
      if (err.data) {
        toastify(err.data.message, "error");
      } else {
        toastify("Unexpected Error Occured", "error");
      }
    }
  };

  return (
    <div className="container mt-3 d-flex align-items-center justify-content-evenly p-2 gap-5">
      <form
        encType="multipart/form-data"
        className="profile-card shadow p-3 d-flex flex-column gap-4 align-items-center justify-content-center"
        onSubmit={handleProfileSubmit}
      >
        <div className="imageUploadWrapper">
          <img src={fileUrl} alt="profilePhoto" className="profileImage" />
          <input
            type="file"
            name="ProfilePhoto"
            onChange={handleInputChange}
            id="dp"
            accept="image/*"
            disabled={!isEditing}
          />
        </div>

        {isEditing ? (
          <InputField
            type="text"
            placeholder="Enter Name"
            onChange={handleInputChange}
            name="Name"
            className="w-60 fs-7"
            disabled={!isEditing}
            value={formState.Name}
          />
        ) : (
          <div className="fs-3 fw-600">Hi, {user?.name}</div>
        )}

        {isEditing ? (
          <InputField
            type="email"
            placeholder="Enter Email"
            onChange={handleInputChange}
            name="Email"
            className="w-60 fs-7"
            disabled={!isEditing}
            value={formState.Email}
          />
        ) : (
          <div className="fs-5 fw-500 text-secondary">{user?.email}</div>
        )}

        <BtnContainer>
          {isEditing ? (
            <input
              type="submit"
              className="fs-6 text-light bg-secondary fw-700 rounded px-5 py-3"
              value="Save"
              disabled={isUpdateProfileLoading}
            />
          ) : (
            <Btn
              className="fs-6 text-light bg-secondary fw-700 rounded"
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              {"Edit Profile"}
            </Btn>
          )}
          {isEditing ? (
            <Btn
              className="fs-6 text-light bg-primary fw-700 rounded"
              onClick={() => {
                setFileUrl(user?.profilePhoto);
                setFormState((prevState) => ({
                  ...prevState,
                  Name: user?.name ?? "",
                  Email: user?.email ?? "",
                }));
                setIsEditing(false);
              }}
            >
              Cancel
            </Btn>
          ) : (
            <Btn
              className="fs-6 text-light bg-primary fw-700 rounded"
              onClick={() => {
                toastify("Order page is under development", "info");
              }}
            >
              View Orders
            </Btn>
          )}
        </BtnContainer>
      </form>
      <form
        onSubmit={handlePasswordSubmit}
        className="update-password p-5 shadow gap-3 d-flex flex-column align-items-center justify-content-center"
      >
        <div className="fw-600 fs-2 p-2">Change Password</div>
        <InputField
          type="password"
          placeholder="Enter Current Password"
          onChange={handlePasswordChange}
          name="currentPassword"
          className="w-100 fs-7"
        />
        <InputField
          type="text"
          placeholder="Enter New Password"
          onChange={handlePasswordChange}
          name="newPassword"
          className="w-100 fs-7"
        />
        <input
          type="submit"
          disabled={isUpdatePasswordLoading}
          className="px-5 py-3 fs-6 text-dark bg-light border border-primary fw-700 rounded"
          value={isUpdatePasswordLoading ? "Updating..." : "Update Password"}
        />
      </form>
    </div>
  );
}

export default Profile;
