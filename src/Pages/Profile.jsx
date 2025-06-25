import React, { useContext, useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Provider/Loading";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

const Profile = () => {
   useEffect(() => {
      document.title = 'My Profile';
    }, []);
  const { updateUser, user, setUser } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!"); // 
        setShowForm(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to update profile!"); 
      });
  };

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-500 flex  min-h-screen items-center flex-col justify-between">
       <header className="fixed top-0 left-0 w-full z-50 bg-slate-200 shadow-md">
        <Navber />
      </header>
    <main className="flex justify-center ic my-60   card  items-center  px-9  w-full">
        <div className="card w-96 bg-white shadow-xl rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
        <figure className="flex justify-center p-6">
          <div className="avatar">
            <div className="w-28 h-28 rounded-full ring-4 ring-gradient-to-r ring-blue-400 ring-offset-4">
              <img src={user.photoURL} alt={user.displayName || "Profile"} />
            </div>
          </div>
        </figure>
        <div className="card-body flex flex-col mx-auto text-center p-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {user.displayName}
          </h2>
          <div className="flex items-center gap-1 justify-center hover:text-blue-500">
            <FaEnvelope />
            <span>{user.email}</span>
          </div>

          <div className="card-actions justify-center mt-8 space-x-4">
            <div className="max-w-md mx-auto rounded-xl">
              <button
                onClick={toggleForm}
                className="btn w-full btn-primary px-8 py-2 rounded-full text-white bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 transition duration-300"
              >
                {showForm ? "Cancel" : "Update Profile"}
              </button>

              {showForm && (
                <form onSubmit={handleSubmit} className="space-y-4 my-1">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                      placeholder="Enter your Name"
                     
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photo URL
                    </label>
                    <input
                      name="photo"
                      type="text"
                      className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                      placeholder="Enter your PhotoURL"
                     
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 rounded-2xl bg-green-600 text-white hover:bg-green-700 transition"
                  >
                    Save Edit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="w-full bg-slate-200">
    <Footer></Footer>
     {/* ✅ Toast Container */}
      <ToastContainer position="top-center" autoClose={2000} />
    </footer>

     
    </div>
  );
};

export default Profile;
