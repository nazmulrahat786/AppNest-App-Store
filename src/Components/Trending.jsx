import React, { useEffect, useState } from 'react';
import TrdCard from './TrdCard';

const Trending = ({data}) => {
    const [trdApp,setTrdApp]=useState([]);
   //  console.log(data);
    
       
       useEffect(()=>{
        const afilteredData = data.filter(app => app.rating >4.5  );
        // console.log(afilteredData);
        setTrdApp(afilteredData);

       },[data])
    
    return (
         <div>
            <h1 className='text-center py-2  px-10 bg-orange-500 rounded-b-3xl text-2xl font-bold my-2'>Trending Apps</h1>
           
         <div className='flex  flex-wrap  justify-center px-20  ' >
         {
            trdApp.map(app => <TrdCard key={app.id} app={app}></TrdCard>)
           }

         </div>

        </div>
    );
};

export default Trending;