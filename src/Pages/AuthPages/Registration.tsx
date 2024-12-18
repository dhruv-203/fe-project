import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import defaultImage from "../../Assets/user.png";
import ErrorDisplay from "../../Components/Auth/ErrorDisplay";
import InputField from "../../Components/Auth/InputField";
import "../../Components/Auth/InputField.css";
// import { authenticate } from "../../Store";
import { useRegisterUserMutation } from "../../Store/Slices/authApi";
import { toastify } from "../../utils";
import "./Registration.css";
export interface FormDataState {
  Name: string;
  Email: string;
  Password: string;
  RePassword: string;
  ProfilePhoto: File | null;
}

function Registration() {
  const [formState, setFormState] = useState<FormDataState>({
    Name: "",
    Email: "",
    Password: "",
    RePassword: "",
    ProfilePhoto: null,
  });
  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();
  // const dispatcher = useDispatch();
  const loc = useLocation();
  const nav = useNavigate();
  const [fileUrl, setFileUrl] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;
    if (files !== null && files[0] && files[0].type && files[0].size) {
      // profile photo file type validation
      if (!files[0].type.includes("image/")) {
        console.log("Please upload only image");
        toastify("Please upload only image", "error");
        setErrors(["Please upload only image"]);
      } else if (files[0].size > 10485760) {
        console.log(
          "Please upload less than",
          (10485760 / (1024 * 1024)).toFixed(2)
        );
        setErrors([
          `Please upload less than ${(10485760 / (1024 * 1024)).toFixed(2)} MB`,
        ]);
        toastify(
          `Please upload less than ${(10485760 / (1024 * 1024)).toFixed(2)} MB`,
          "error"
        );
      } else {
        setFileUrl(URL.createObjectURL(files[0]));
        setErrors([]);
      }
    }
    setFormState((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  }

  function validateForm(state: FormDataState) {
    const nullCheck = Object.entries(state).some(
      ([_, value]) => !value || value === null || value === ""
    );

    if (nullCheck) {
      setErrors(["Error Occured all fields are required"]);
      toastify("Error Occured all fields are required", "error");
      console.log("Error Occured all fields are required");
      return false;
    } else {
      setErrors([]);
    }

    // password validation
    if (state.Password.length < 8) {
      setErrors(["Password must be of 8 or more characters"]);
      toastify("Password must be of 8 or more characters", "error");
    } else if (state.Password !== state.RePassword) {
      setErrors([...errors, "Password dosen't match with Re-Type Password"]);
      toastify("Password dosen't match with Re-Type Password", "error");
    } else {
      setErrors([]);
    }
    return errors.length > 0 ? false : true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm(formState)) {
      return;
    }
    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      if (value && (value !== null || value !== "")) {
        formData.append(`${key}`, value);
      }
    });
    try {
      await registerUser(formData).unwrap();
      nav(loc.state !== null ? loc.state.from : "/home");
    } catch (error: any) {
      if (error && error?.data?.message) {
        toastify(error.data.message, "error");
        setErrors([error.data.message]);
      } else {
        setErrors(["Unexpected Error occured"]);
        toastify("Unexpected Error occured", "error");
        console.log(error);
      }
    }
  }

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center  bg-primary py-3">
      <div className="section-title text-light pb-3 fs-3 fw-700">
        Register Here
      </div>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="registrationContainer rounded bg-light w-30 mx-auto p-3 d-flex flex-column gap-2 justify-content-center align-items-center"
      >
        {errors.length > 0 ? <ErrorDisplay errors={errors} /> : <></>}
        <div className="imageUploadWrapper">
          <img
            src={fileUrl === "" ? defaultImage : fileUrl}
            alt=""
            className="profileImage"
          />
          <input
            type="file"
            name="ProfilePhoto"
            onChange={handleInputChange}
            id="dp"
            accept="image/*"
          />
        </div>
        <InputField
          type="text"
          placeholder="Enter Name"
          onChange={handleInputChange}
          name="Name"
          className="w-60 fs-7"
        />
        <InputField
          type="email"
          placeholder="Enter Email"
          onChange={handleInputChange}
          name="Email"
          className="w-60 fs-7"
        />
        <InputField
          type="password"
          placeholder="Enter Password"
          onChange={handleInputChange}
          name="Password"
          className="w-60 fs-7"
        />
        <InputField
          type="text"
          placeholder="Re-type Password"
          onChange={handleInputChange}
          name="RePassword"
          className="w-60 fs-7"
        />

        <span className="text-dark fs-7 py-2">
          Already have an account?{" "}
          <NavLink to={"/auth/login"} state={loc.state}>
            Click Here
          </NavLink>
        </span>
        <input
          type="submit"
          className="w-20 p-2 fs-6 rounded bg-primary text-light cursor-pointer"
          value={isLoading ? "loading..." : "submit"}
          disabled={isLoading}
        />
      </form>
    </div>
  );
}

export default Registration;
