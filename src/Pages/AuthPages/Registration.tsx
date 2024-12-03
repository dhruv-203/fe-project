import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import defaultImage from "../../Assets/user.png";
import ErrorDisplay from "../../Components/Auth/ErrorDisplay";
import InputField from "../../Components/Auth/InputField";
import "../../Components/Auth/InputField.css";
import { authenticate } from "../../Store";
import "./Registration.css";

interface FormDataState {
  Name: string;
  Email: string;
  Password: string;
  RePassword: string;
  Address: string;
  ProfilePhoto: File | null;
  Pincode: string;
}

function Registration() {
  const [formState, setFormState] = useState<FormDataState>({
    Name: "",
    Email: "",
    Password: "",
    RePassword: "",
    Address: "",
    ProfilePhoto: null,
    Pincode: "",
  });
  const dispatcher = useDispatch();
  const loc = useLocation();
  const nav = useNavigate();
  console.log(loc.state);
  const [fileUrl, setFileUrl] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;
    if (files !== null) {
      // profile photo file type validation
      if (!files[0].type.includes("image/")) {
        console.log("Please upload only image");
        setErrors(["Please upload only image"]);
      } else setFileUrl(URL.createObjectURL(files[0]));
    }
    setFormState((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  }

  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function validateForm(state: FormDataState) {
    const nullCheck = Object.entries(state).some(
      ([_, value]) => !value || value === null || value === ""
    );

    if (nullCheck) {
      setErrors(["Error Occured all fields are required"]);
      console.log("Error Occured all fields are required");
      return false;
    } else {
      setErrors([]);
    }

    // password validation
    if (state.Password.length < 8) {
      setErrors(["Password must be of 8 or more characters"]);
    } else if (state.Password !== state.RePassword) {
      setErrors([...errors, "Password dosen't match with Re-Type Password"]);
    }
    //pincode validation
    else if (state.Pincode === "Infinity" || isNaN(+state.Pincode)) {
      setErrors([...errors, "Pincode must be a number"]);
    } else if (state.Pincode.length !== 6) {
      setErrors([...errors, "Pincode must be of 6 digits"]);
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
    dispatcher(authenticate(true));
    nav(loc.state !== null ? loc.state.from : "/home");
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
        <textarea
          cols={10}
          rows={5}
          className="removeDefault fs-7 py-2 px-3 w-60"
          placeholder="Enter Your Address"
          onChange={handleTextAreaChange}
          name="Address"
        />
        <InputField
          type="text"
          placeholder="Enter your pincode"
          onChange={handleInputChange}
          className="w-60 fs-7"
          name="Pincode"
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
          value="submit"
        />
      </form>
    </div>
  );
}

export default Registration;
