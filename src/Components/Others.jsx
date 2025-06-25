
import React, { useEffect, useState } from 'react';
import OtrCard from './OtrCard';

const Others = ({data}) => {
     const [otrApp,setOtrApp]=useState([]);
   //  console.log(data);
    
       
       useEffect(()=>{
        const afilteredData = data.filter(app => app.rating <4.5  );
        // console.log(afilteredData);
        setOtrApp(afilteredData);

       },[data])
    
    return (
         <div>
            <h1 className='text-center py-2  px-10 bg-pink-500 rounded-b-3xl text-2xl font-bold my-2'>New Apps</h1>
           
         <div className='flex  flex-wrap  justify-center px-20  ' >
         {
            otrApp.map(app => <OtrCard key={app.id} app={app}></OtrCard>)
           }

         </div>

        </div>)
};

export default Others;