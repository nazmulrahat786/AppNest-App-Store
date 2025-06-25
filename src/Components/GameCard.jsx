import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { ImStarEmpty } from 'react-icons/im';

import { Link } from 'react-router';

const GameCard = ({app}) => {
  
    

    

    return (
        <Link to={`/appDetails/${app.id}`} className='card w-44 h-44 p-10 text-center flex  flex-col justify-center items-center bg-base-100 shadow-xl m-4'>
             <img className='w-16 rounded-xl' src={app.
thumbnail} alt="" />
            <h1> {app.name}</h1>
            <div className="flex mx-auto justify-between gap-5 my-0.5 items-center w-full">
                <p className="flex items-center">
                  <ImStarEmpty  /> {app.rating}
                </p>
                <p className="flex items-center">
                  <FaDownload /> {app.downloads}
                </p>
              </div>
          

        </Link>
    );
};


export default GameCard;