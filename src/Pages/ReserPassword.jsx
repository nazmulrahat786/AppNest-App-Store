import React, { use, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReserPassword = () => {
   useEffect(() => {
      document.title = 'Password Reset';
    }, []);
  const navigate = useNavigate();
  const { resetPassword } = use(AuthContext);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    resetPassword(email)
      .then(() => {
        toast.success("Reset email sent successfully!");
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000); // Delay to allow toast to show
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong!");
        console.error(error);
      });
  };

  return (
    <div className="flex mx-auto flex-col my-32 justify-center items-center">
      
      <div className="card w-10/12 bg-white px-10 py-11 flex justify-center items-center shadow-xl rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <h1 className="text-xl font-bold text-center  my-2">Reset Password</h1>
        <form className="flex flex-col gap-5" onSubmit={handleResetPassword}>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input name="email" type="email" placeholder="abc@gmail.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <button type="submit" className="btn bg-blue-600 text-white btn-wide">Send Reset Email</button>
        </form>
        {/* ✅ ToastContainer is outside the form */}
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
};

export default ReserPassword;
