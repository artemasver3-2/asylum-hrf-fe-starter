import Logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className='flex-c w-full primary-c justify-between  text-amber-50'>
      <section className='footer-details flex relative'>
        <div className='flex '>
          <a href='https://www.humanrightsfirst.org/'>
            <img className='w-[100px] ' src={Logo} alt='HRF logo white' />
          </a>
        </div>
      </section>
        <div className='footer-address flex-c m-auto justify-center  -mt-[3rem]'>
          <p className='font-SmoochSans text-[2rem]'>Human Rights First</p>
          <p className='font-SmoochSans '>75 Broad St, 31st Floor</p>
          <p className='font-SmoochSans -mb-[1rem]'>New York, New York 10004 US</p>
          <p className='pt-4 font-SmoochSans '>For Media Inquiries call 202-370-333</p>
        </div>
      
      <nav className='footer-links flex gap-4 justify-center  mb-[1rem] '>
        <button className='nav-btn'>About Us</button>
        <button className='nav-btn'>Contact Us</button>
        <button className='nav-btn'>Press</button>
        <button className='nav-btn'>Terms & Privacy</button>
        <button className='nav-btn'>Sign Up</button>
        <button className='nav-btn'>Careers</button>
      </nav>
    </footer>
  );
}
