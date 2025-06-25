import React, { useEffect, useState } from "react";
import ProCard from "./ProCard";

const Productivity = ({ data }) => {
  const [proApp, setProApp] = useState([]);

  useEffect(() => {
    const filteredData = data.filter((app) => app.category === "Productivity");
    // console.log(filteredData);
    setProApp(filteredData);
  }, [data]);

  return (
    <div>
      <h1 className='text-center px-10 bg-yellow-200 py-2 rounded-b-3xl text-2xl font-bold my-2'>Productivity</h1>

      <div className="flex flex-wrap  justify-center px-20 ">
        {proApp.map((app) => (
         
          <ProCard key={app.id} app={app}></ProCard>
        ))}
      </div>
    </div>
  );
};

export default Productivity;
