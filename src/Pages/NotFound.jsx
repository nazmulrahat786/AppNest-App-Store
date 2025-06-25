import React, { useEffect } from "react";
import logo from "./../../public/favicon.png";
const NotFound = () => {

   useEffect(() => {
      document.title = 'Oops!!! 404';
    }, []);
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center bg-white p-4 text-center">
      <div className="max-w-md flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-6">
      <img className="w-46  text-center" src={logo} alt="" />
        <h1 className="text-5xl font-bold text-error mb-4">404</h1>
        <p className="text-xl mb-6 text-base-content">
          Oops! The page you're looking for doesn't exist.
        </p>

        <a href="/" className="btn btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
