import { Link } from "react-router";
import Footer from "../Footer";
import Navber from "../Navber";
import { useEffect } from "react";



const About = () => {
     useEffect(() => {
        document.title = 'About';
      }, []);
 
  return (
    <div className="bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 flex min-h-screen flex-col justify-between">
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-200 shadow-md">
        <Navber />
      </header>

        <div className="min-h-screen my-14 bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-6 text-center">
          About <span className="text-secondary">AppNest</span>
        </h1>
        <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed text-center sm:text-left">
          Welcome to{" "}
          <span className="font-semibold text-primary">AppNest</span> — your
          ultimate destination for discovering trending and top-rated mobile
          applications. We believe in empowering users by providing a curated
          platform that makes finding the best apps quick, easy, and enjoyable.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-center sm:text-left">
            At AppNest, our mission is to connect users with the perfect apps
            that fit their lifestyle, whether it’s productivity, gaming,
            education, or entertainment. We strive to offer a seamless
            experience with trustworthy reviews, dynamic categories, and
            user-friendly navigation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
            Why Choose AppNest?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-base sm:text-lg">
            <li>Curated and updated app listings for quality and relevance.</li>
            <li>User reviews and ratings to help you make informed choices.</li>
            <li>Easy-to-use interface built with modern technologies.</li>
            <li>Secure and personalized experience with authentication features.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-700 text-center sm:text-left text-base sm:text-lg">
            Have questions or suggestions? We'd love to hear from you! Reach
            out at{" "}
            <a
              href="mailto:support@appnest.com"
              className="text-primary underline font-medium hover:text-secondary transition-colors"
            >
              support@appnest.com
            </a>
            .
          </p>
        </section>

        <div className="flex justify-center">
          <Link to="/" className="btn btn-primary btn-lg px-12 rounded-full hover:btn-secondary transition-all duration-300">
            Explore Apps Now
          </Link>
        </div>
      </div>
    </div>
 

      <footer className="w-full bg-slate-200">
        <Footer />
      </footer>
    </div>
  );
};

export default About;














  


