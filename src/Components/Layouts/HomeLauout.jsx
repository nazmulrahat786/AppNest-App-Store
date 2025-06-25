import React from "react";
import Navber from "../Navber";
import { Link, useLoaderData } from "react-router";
import { FaDownload } from "react-icons/fa";
import { ImStarEmpty } from "react-icons/im";
import Footer from "../Footer";

const HomeLauout = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className="sticky top-0">
      <header className="w-full  flex justify-center items-center mx-auto">
        <Navber></Navber>
      </header>
      <main className="min-h-screen w-full flex items-center  justify-center bg-base-200">
        <section>
         <div className="grid justify-center items-center mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 p-4">
         {data.map((app) => (
            <Link to={`/appDetails/${app.id}`} key={app.id}  className="card w-44 h-44 p-10 text-center flex flex-col justify-center items-center bg-base-100 shadow-xl m-4">
             
                <img className="w-20 rounded-2xl" src={app.thumbnail} alt="Shoes" />
              
                <h2 className="card-title">{app.name}</h2>
           
             <div className="flex mx-auto justify-between gap-5 my-0.5 items-center w-full">
                <p className="flex items-center">
                  <ImStarEmpty  /> {app.rating}
                </p>
                <p className="flex items-center">
                  <FaDownload /> {app.downloads}
                </p>
              </div>
             </Link>
          
          ))}
         </div>
        </section>
      </main>
      <footer className='bg-base-200 w-full'>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLauout;
