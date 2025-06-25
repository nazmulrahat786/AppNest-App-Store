
import Navber from '../Navber';
import { useLoaderData } from 'react-router';
import Education from '../Education';
import Productivity from '../Productivity';
import Gaming from '../Gaming';
import Footer from '../Footer';
import AutoSlider from '../AutoSlider';
import Trending from '../Trending';
import Others from '../Others';
import { useEffect } from 'react';

const AppLayout = () => {
    const data = useLoaderData();
   useEffect(() => {
    document.title = 'Home ';
  }, []);


    return (
      <div className='bg-gradient-to-r from-blue-200 to-blue-500'>
  {/* Fixed Navbar */}
  <header className=''>
    <div className='fixed top-0 left-0 w-full z-50 bg-base-200 shadow-md'>
      <Navber />
    </div>

    {/* Padding top to avoid content hiding behind navbar */}
    <div className="pt-20  my-3 w-11/12 flex justify-center mx-auto">
      <AutoSlider />
    </div>
  </header>

  <main className='min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-blue-500'>
    
   
  <Trending data={data}></Trending>
 <Productivity data={data}></Productivity>
 
 <Education data={data}></Education>

<Gaming data={data}></Gaming>

    <Others data={data}></Others>
    
  </main>


  <footer className='bg-base-200 shadow-2xl w-full'>
    <Footer />
  </footer>
</div>

    );
};

export default AppLayout;