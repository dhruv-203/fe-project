import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ErrorDisplay from "../../Components/Auth/ErrorDisplay";
import InputField from "../../Components/Auth/InputField";
import "../../Components/Auth/InputField.css";
import { authenticate } from "../../Store";
import "./Registration.css";
interface FormDataState {
  Email: string;
  Password: string;
}

function Login() {
  const [formState, setFormState] = useState<FormDataState>({
    Email: "",
    Password: "",
  });
  const dispatcher = useDispatch();
  const loc = useLocation();
  console.log(loc.state);
  const navigate = useNavigate();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      !formState.Email ||
      !formState.Password ||
      formState.Email.trim() === "" ||
      formState.Password.trim() === ""
    ) {
      setError("All fileds are required");
      return;
    }
    //directly use formState
    //implement the login fetch apis to get user login and then call this method
    // if truely authenticated
    dispatcher(authenticate(true));
    navigate(loc.state ? loc.state.from : "/home", { replace: true });
  }

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center  bg-primary py-5">
      <form
        onSubmit={handleSubmit}
        className="registrationContainer rounded bg-light w-30 mx-auto my-4 p-3 d-flex flex-column gap-2 justify-content-center align-items-center"
      >
        {error !== "" ? <ErrorDisplay errors={[error]} /> : <></>}
        <div className="section-title text-dark pb-3 fs-3 fw-700">
          Login Here
        </div>
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
        <span className="text-dark fs-7 py-2">
          Don't have an account?{" "}
          <NavLink to={"/auth/register"}>Click Here</NavLink>
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

export default Login;
