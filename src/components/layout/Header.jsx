import Logo from '../../assets/logo.png';
import { LoggingButtons } from '../../auth/LoggingButtons.jsx';
import { NavLink } from 'react-router-dom';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0
 */
export default function Header() {
  // TODO: Replace me
  const isAuthenticated = false;

  return (
    <>
    <header className='flex w-[100%] primary-c px-14 mb-[2rem]'>
      <div className='flex h-[10rem]'>
        <NavLink to='https://www.humanrightsfirst.org/'>
          <img className='w-[200px] -ml-[3rem]' src={Logo} alt='HRF logo white' />
        </NavLink>
      </div>
      <div className='w-full'>
        <h1 className='text-white font-SmoochSans text-[3rem] -mb-[2rem] mt-[2rem]'>ASYLUM OFFICE GRANT RATE TRACKER</h1><br></br>
        <span className='text-white text-[1.25rem] font-SmoochSans'>The Asylum Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions.</span>
      </div>
      <div className='flex items-center  gap-3 -mt-[7.5rem] -mr-[2rem]'>
        <NavLink to='/' className='nav-btn'>
          Home
        </NavLink>
        <NavLink to='/graphs' className='nav-btn'>
          Graphs
        </NavLink>
        {isAuthenticated && (
          <NavLink to='/profile' className='nav-btn'>
            Profile
          </NavLink>
        )}
        <LoggingButtons />
      </div>
    </header>
    </>
  );
}
