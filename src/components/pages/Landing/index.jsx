import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';
import { Link } from 'react-router-dom';
/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    window.location.href = "https://www.humanrightsfirst.org/";
  };

  return (
    <>
    <div className='flex-c secondary-c m-auto mb-[8rem]'>
      <div className='flex w-full h-[20rem] mb-[2rem]'>
        <div className='flex  items-center justify-center w-[20rem] '><img src={barGraph} alt='bar graph' className='h-[12rem] w-[12rem]'/> <p className='mt-[15rem] -ml-[12rem] font-SmoochSans text-[1.5rem]'>Search Grant Rates By Office</p></div>
        <div className='flex  items-center justify-center w-[20rem]'><img src={pieChart} alt='pie chart' className='h-[12rem] w-[12rem]'/> <p className='mt-[15rem] -ml-[13rem] font-SmoochSans text-[1.5rem]'>Search Grant Rates By Nationality</p></div>
        <div className='flex  items-center justify-center w-[20rem] '><img src={lineGraph} alt='line graph' className='h-[12rem] w-[12rem]'/> <p className='mt-[15rem] -ml-[14rem] font-SmoochSans text-[1.5rem]'>Search Grant Rates Over Time</p></div>
    </div>
   
    <div> <Link to='' className='bg-gray-400 w-[7rem] p-2 m-2'>View the Data</Link> 
      <Link to='' className='bg-gray-400 w-[7rem] p-2 m-2'>Download the Data</Link>
      </div>
    </div>
    
    <div className='flex mb-[10rem] w-full '>
      <img src={paperStack} alt='two stacks of papers side by side in black white' className='m-auto h-[20rem] w-[36rem] rounded-lg '/>
      <div className='w-[40rem] m-auto -ml-[35rem]'><p className='text-justify font-ShareTech'>Human Rights first has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we recieved through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.</p></div>
    </div>
    <div className='w-full mb-[2rem]'>
      <h2 className='font-SmoochSans text-[3rem] m-auto mb-[2rem]'>Systemic Disparity Insights</h2>
    <div className='flex gap-64 justify-center'>
        <div className='w-[20rem]'>
          <h3 className='font-SmoochSans text-[2.5rem]'>36%</h3>
          <p className='font-ShareTech'>By the end of the Trump admininstration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2020.</p>
        </div>
        <div className='w-[20rem]'>
          <h3 className='font-SmoochSans text-[2.5rem]'>5%</h3>
          <p className='font-ShareTech'>The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
        </div>
        <div className='w-[20rem]'>
          <h3 className='font-SmoochSans text-[2.5rem]'>6x Lower</h3>
          <p className='font-ShareTech'>Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Fransico asylum office.</p>
        </div>
     </div>

     <div className='mb-[4rem] mt-[4rem]'>
      <button className='bg-gray-400 w-[7rem] p-2 m-auto' onClick={handleReadMore}>Read More</button>
      </div>
    
    <div><button className='font-SmoochSans text-[2rem]' onClick={scrollToTop}>Back To Top ↑</button></div>
    </div>
    </>
  );
};
