import React, { useEffect, useState } from 'react';
import EduCard from './EduCard';

const Education = ({data}) => {
 const [eduApp,setEduApp]=useState([]);

   
   useEffect(()=>{
    const afilteredData = data.filter(app => app.category === 'Education');
    // console.log(afilteredData);
    setEduApp(afilteredData);
   },[data])


    return (
        <div>
            <h1 className='text-center px-10 bg-green-400 py-2 rounded-b-3xl text-2xl font-bold my-2'>Education</h1>
           
         <div className='flex  flex-wrap  justify-center px-20 ' >
         {
            eduApp.map(app => <EduCard key={app.id} app={app}></EduCard>)
           }

         </div>

        </div>
    );
};

export default Education;