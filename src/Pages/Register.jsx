import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
   useEffect(() => {
      document.title = 'Register';
    }, []);
  const { creatUser, setUser, updateUser, googleLoginPopUp } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUpperCase) {
      setPasswordError("Password must contain at least one uppercase letter");
      return
    } else if (!hasLowerCase) {
      setPasswordError("Password must contain at least one lowercase letter");
      return
    } else if (!isLongEnough) {
      setPasswordError("Password must be at least 6 characters long");
      return
    } else {
      setPasswordError("");
    }

    if (name.length < 5) {
      setNameError("Name sould be more then 5 chareacter");
    } else {
      setNameError("");
    }

    // console.log(name, photo, email, password);
    creatUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
              toast.success(" Registration successful!!!");
                          setTimeout(() => {
                  navigate("/");
                }, 2000);
          
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
      });
  };
  const googleLogin = () => {
    googleLoginPopUp()
      .then((result) => {
        const user = result.user;
          toast.success(" Registration successful!!!");
                          setTimeout(() => {
                  navigate("/");
                }, 2000);
        // console.log(user);
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        // ..
      });
  };

  return (
    <div>
       {/* ✅ ToastContainer is outside the form */}
              <ToastContainer position="top-center" autoClose={2000} />
      <div className="flex  mx-auto justify-center items-center ">
        <div className="hero  min-h-screen">
          <div className="hero-content w-full flex-col lg:flex-row-reverse">
            <div className="card bg-white   w-full max-w-sm shrink-0 shadow-2xl">
              <h1 className="flex mx-auto font text-3xl py-6">Register now!</h1>
              <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                  {/* Name */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                  />
                  {nameError && (
                    <p className="text-xs text-red-600">{nameError}</p>
                  )}
                  {/* PhotoURL */}
                  <label className="label"> PhotoURL</label>
                  <input
                    type="text"
                    name="photo"
                    className="input"
                    placeholder=" PhotoURL"
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  {/* password */}
                  <label className="label">Password</label>
         <input
  type="password"
  name="password"
   placeholder="Password"
  className="input"
/>

{passwordError && (
  <p className="text-xs text-red-600">{passwordError}</p>
)}

                  

                  <button type="submit" className="btn btn-neutral mt-4">
                    Register
                  </button>

                  <p className="py-5 space-x-1 text-center">
                    Already registered?  
                    <span className="px-1"><Link
                      className="text-blue-500 font-semibold"
                      to="/auth/login"
                    >
                        Login 
                    </Link> </span>
                    here
                  </p>
                </form>
                <button
                  onClick={googleLogin}
                  className="btn my-2 bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
