import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';

const Gaming = ({ data }) => {
    const [gameApp, setGameApp] = useState([]);
  
    useEffect(() => {
      const filteredData = data.filter((app) => app.category === "Gaming");
      // console.log(filteredData);
      setGameApp(filteredData);
    }, [data]);
  
    return (
      <div className='mb-10'>
        <h1  className='text-center bg-red-400 px-10  py-2 rounded-b-3xl text-2xl font-bold my-2'>Gaming Apps</h1>
  
        <div className="flex  flex-wrap  justify-center px-20  ">
          {gameApp.map((app) => (
           
        
            <GameCard key={app.id} app={app}></GameCard>
          ))}
        </div>
      </div>
    );
  };

export default Gaming;