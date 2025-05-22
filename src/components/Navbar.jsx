import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar fixed w-full z-10 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to='/'><img src="/image/urban_logo.webp" alt="Logo" className="h-8" /></Link>

          </div>

          <div className="hidden gap-4 md:flex max-md:space-x-6">
            <Link to='/beauty' className="text-gray-700">Beauty</Link>
            <Link to='/wall' className="text-gray-700">Well Panels</Link>
            <Link to='/native' className="text-gray-700">Native</Link>

          </div>

          <div className="flex gap-2">
            <input className="border h-10 px-3 max-md:w-[30vw] rounded-md" placeholder="Search " />
          </div>

          <div className="max-md:hidden flex gap-4">

            <ul className='flex gap-4'>
              <li><Link to='/cart' className="text-gray-700"><svg className='w-5' width="100%" height="100%" viewBox="0 0 24 24" fill="#0F0F0F" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.327 2H1.75v2h1.389l3.339 11.687A2.5 2.5 0 008.88 17.5h8.988a2.5 2.5 0 002.403-1.813l2.475-8.662a1 1 0 00-.961-1.275H5.719l-.71-2.48A1.75 1.75 0 003.328 2zm5.074 13.137L6.29 7.75h14.17l-2.11 7.387a.5.5 0 01-.482.363H8.882a.5.5 0 01-.48-.363z" fill="#0F0F0F"></path><path d="M8.5 21.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.25 21.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#0F0F0F"></path></svg></Link></li>
              <li><a href="#"><svg className='w-5' width="100%" height="100%" viewBox="0 0 24 24" fill="#0F0F0F" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.702 19.422A9.974 9.974 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.975 9.975 0 003.326 7.447A9.963 9.963 0 0012 22a9.963 9.963 0 006.702-2.578zM12 4a8 8 0 00-6.183 13.076 7.752 7.752 0 012.933-2.362 4.75 4.75 0 116.5 0 7.755 7.755 0 012.933 2.362A8 8 0 0012 4zm4.718 14.461a5.753 5.753 0 00-9.436 0A7.964 7.964 0 0012 20a7.964 7.964 0 004.718-1.539zM12 14a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" fill="#0F0F0F"></path></svg></a></li>
            </ul>
            {/* <ul className='flex gap-4'>
              <li><a href="#"><svg className='w-5' width="100%" height="100%" viewBox="0 0 24 24" fill="#0F0F0F" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.327 2H1.75v2h1.389l3.339 11.687A2.5 2.5 0 008.88 17.5h8.988a2.5 2.5 0 002.403-1.813l2.475-8.662a1 1 0 00-.961-1.275H5.719l-.71-2.48A1.75 1.75 0 003.328 2zm5.074 13.137L6.29 7.75h14.17l-2.11 7.387a.5.5 0 01-.482.363H8.882a.5.5 0 01-.48-.363z" fill="#0F0F0F"></path><path d="M8.5 21.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.25 21.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#0F0F0F"></path></svg></a></li>
              <li><a href="#"><svg className='w-5' width="100%" height="100%" viewBox="0 0 24 24" fill="#0F0F0F" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.702 19.422A9.974 9.974 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.975 9.975 0 003.326 7.447A9.963 9.963 0 0012 22a9.963 9.963 0 006.702-2.578zM12 4a8 8 0 00-6.183 13.076 7.752 7.752 0 012.933-2.362 4.75 4.75 0 116.5 0 7.755 7.755 0 012.933 2.362A8 8 0 0012 4zm4.718 14.461a5.753 5.753 0 00-9.436 0A7.964 7.964 0 0012 20a7.964 7.964 0 004.718-1.539zM12 14a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" fill="#0F0F0F"></path></svg></a></li>
            </ul> */}
          </div>

          <div className="md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200 h-screen">
          <Link to='/beauty' className=" block text-gray-700">Beauty</Link>
          <Link to='/wall' className=" block text-gray-700">Well Panels</Link>
          <Link to='/native' className=" block text-gray-700">Native</Link>

          <div className=" md:hidden flex gap-4">
            <ul className='flex gap-4'>
              <li><Link to='/cart' className="text-gray-700"><svg className='w-5' width="100%" height="100%" viewBox="0 0 24 24" fill="#0F0F0F" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.327 2H1.75v2h1.389l3.339 11.687A2.5 2.5 0 008.88 17.5h8.988a2.5 2.5 0 002.403-1.813l2.475-8.662a1 1 0 00-.961-1.275H5.719l-.71-2.48A1.75 1.75 0 003.328 2zm5.074 13.137L6.29 7.75h14.17l-2.11 7.387a.5.5 0 01-.482.363H8.882a.5.5 0 01-.48-.363z" fill="#0F0F0F"></path><path d="M8.5 21.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.25 21.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#0F0F0F"></path></svg></Link></li>
              <li><a href="#"><svg className='w-5' width="100%" height="100%" viewBox="0 0 24 24" fill="#0F0F0F" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.702 19.422A9.974 9.974 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.975 9.975 0 003.326 7.447A9.963 9.963 0 0012 22a9.963 9.963 0 006.702-2.578zM12 4a8 8 0 00-6.183 13.076 7.752 7.752 0 012.933-2.362 4.75 4.75 0 116.5 0 7.755 7.755 0 012.933 2.362A8 8 0 0012 4zm4.718 14.461a5.753 5.753 0 00-9.436 0A7.964 7.964 0 0012 20a7.964 7.964 0 004.718-1.539zM12 14a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" fill="#0F0F0F"></path></svg></a></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
