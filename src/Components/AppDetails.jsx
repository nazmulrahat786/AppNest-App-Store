import React, { useEffect, useState, useContext } from "react";
import Navber from "./Navber";
import { useLoaderData, useParams } from "react-router";
import { FaDownload, FaStar } from "react-icons/fa";
import { ImStarEmpty } from "react-icons/im";
import Footer from "./Footer";
import { AuthContext } from "../Provider/AuthProvider";

const AppDetails = () => {
   useEffect(() => {
    document.title = 'App Drtails';
  }, []);
  const data = useLoaderData();
  const { id } = useParams();
  const [appDtl, setAppDtl] = useState({});

  useEffect(() => {
    const appDetails = data.find((singleApp) => singleApp.id === id);
    setAppDtl(appDetails);
  }, [data, id]);
  console.log(appDtl);

  const [isInstalled, setIsInstalled] = useState(false);
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [submittedReview, setSubmittedReview] = useState(null);

  const handleInstall = () => {
    setIsInstalled(!isInstalled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isInstalled) {
      alert("Please install the app before submitting a review.");
      return;
    }

    setSubmittedReview({
      name: user?.displayName || "Anonymous",
      avatar: user?.photoURL || "https://i.pravatar.cc/50",
      rating,
      text: reviewText,
      date: new Date().toLocaleString(),
    });

    setRating(0);
    setReviewText("");
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-500 min-h-screen flex flex-col justify-between">
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-200 shadow-md">
        <Navber />
      </header>

      <main className="flex justify-center mt-24 px-4 sm:px-6 lg:px-12 w-full">
        <section className="flex flex-col w-full max-w-6xl shadow-2xl rounded-2xl p-4 sm:p-6 lg:p-8 bg-white">
          {/* Banner */}
          <img
            className="w-full h-auto sm:h-[350px] md:h-[450px] object-cover rounded-2xl"
            src={appDtl.banner}
            alt="App Banner"
          />

          {/* App Info */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-6 gap-4">
            <div className="flex gap-4 items-center">
              <img
                className="w-16 h-16 rounded-xl shadow-lg object-cover"
                src={appDtl.thumbnail}
                alt="App Thumbnail"
              />
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl font-bold">{appDtl.name}</h1>
                <p className="text-sm">{appDtl.developer}</p>
              </div>
            </div>

            <div className="flex gap-3 text-sm sm:text-base">
              <p>{appDtl.category}</p>
              <p className="flex items-center gap-1">
                <ImStarEmpty /> {appDtl.rating}
              </p>
              <p className="flex items-center gap-1">
                <FaDownload /> {appDtl.downloads}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-4 text-sm sm:text-base text-justify">{appDtl.description}</div>

          {/* Features */}
          <div className="mt-6">
            <h2 className="text-lg sm:text-xl font-bold">Features</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm sm:text-base">
              {appDtl.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
    <div className="mx-auto">
  {appDtl && appDtl.reviews && appDtl.reviews.map((review, index) => (
    <div key={index} className="bg-white shadow-md rounded-lg p-4 my-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{review.user}</h3>
        <p className="text-yellow-500 font-bold">{review.rating}★</p>
      </div>
      <p className="text-gray-700 mt-2">{review.comment}</p>
    </div>
  ))}
</div>


          {/* Install Button */}
          <div className="flex justify-center mt-6">
            {isInstalled ? (
              <button
                onClick={handleInstall}
                className="btn active:animate-pulse text-base sm:text-lg text-white w-full sm:w-2/3 rounded-xl active:bg-red-800 bg-red-400 py-2"
              >
                Uninstall
              </button>
            ) : (
              <button
                onClick={handleInstall}
                className="btn active:animate-pulse text-base sm:text-lg text-white w-full sm:w-2/3 rounded-xl active:bg-green-800 bg-green-400 py-2"
              >
                Install
              </button>
            )}
          </div>

          {/* Review Form */}
          <div className="mt-10 max-w-xl mx-auto w-full px-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded-lg p-4 space-y-4"
            >
              <h2 className="text-lg font-semibold">Your Rating</h2>

              <div className="flex justify-center sm:justify-start space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer text-2xl ${
                      (hoverRating || rating) >= star
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(null)}
                  />
                ))}
              </div>

              <textarea
                className="textarea textarea-bordered w-full text-base"
                placeholder="Write your review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
                rows={4}
              />

              <label className="label cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm mt-1 text-wrap sm:mt-0"
                  required
                />
                <span className="label-text text-wrap">
                  We care about protecting your data. Here's our{" "}
                  <span className="link link-primary">Privacy Policy</span>.
                </span>
              </label>

              <button type="submit" className="btn btn-primary w-full text-base">
                Submit Review
              </button>
            </form>

            {/* Submitted Review */}
            {submittedReview && (
              <div className="bg-white mt-6 shadow-md rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center mb-3 space-y-2 sm:space-y-0 sm:space-x-4">
                  <img
                    src={submittedReview.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-base">{submittedReview.name}</h3>
                    <p className="text-xs text-gray-500">{submittedReview.date}</p>
                  </div>
                  <div className="text-yellow-500 font-bold text-sm sm:text-base sm:ml-auto">
                    {submittedReview.rating.toFixed(1)}
                  </div>
                </div>
                <p className="text-gray-700 text-base">{submittedReview.text}</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="w-full bg-slate-200 mt-10">
        <Footer />
      </footer>
    </div>
  );
};

export default AppDetails;
