import React from 'react'


const Footer = () => {
    return (
       <footer className="bg-black-50 text-gray-700 py-10 px-6">
  {/* Logo */}
  <div className="mb-10 flex justify-center md:ml-25 md:justify-start">
    <img src="/image/urban_logo.webp" className="h-8" alt="Urban Logo" />
  </div>

  {/* Grid Sections */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 border-b border-gray-300 pb-10 md:grid-cols-4 md:ml-25">
    {/* Company */}
    <div>
      <h3 className="font-semibold text-lg mb-4">Company</h3>
      <ul className="space-y-2 text-sm">
        <li>About us</li>
        <li>Investor Relations</li>
        <li>Terms & conditions</li>
        <li>Privacy policy</li>
        <li>Anti-discrimination policy</li>
        <li>ESG Impact</li>
        <li>Careers</li>
      </ul>
    </div>

    {/* For Customers */}
    <div>
      <h3 className="font-semibold text-lg mb-4">For customers</h3>
      <ul className="space-y-2 text-sm">
        <li>UC reviews</li>
        <li>Categories near you</li>
        <li>Contact us</li>
      </ul>
    </div>

    {/* For Professionals */}
    <div>
      <h3 className="font-semibold text-lg mb-4">For professionals</h3>
      <p className="text-sm mb-6">Register as a professional</p>
    </div>

    {/* Social Links and Apps */}
    <div>
      <h3 className="font-semibold text-lg mb-4">Social links</h3>
      <div className="flex justify-start space-x-4 mb-4">
        {[...Array(4)].map((_, i) => (
          <a href="#" key={i}>
            <svg className="w-5" viewBox="0 0 24 24" fill="#0F0F0F" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.991 3.95a1 1 0 00-1.51-.86..." />
            </svg>
          </a>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-4">
        <a href="#"><img src="/image/ap.webp" className="h-8" alt="App Store" /></a>
        <a href="#"><img src="/image/gp.webp" className="h-8" alt="Google Play" /></a>
      </div>
    </div>
  </div>

  {/* Footer bottom note */}
  <div className="max-w-7xl mx-auto text-xs text-gray-500 pt-6 text-center md:text-left md:ml-25">
    <p className="mb-1">* As on December 31, 2024</p>
    <p>© Copyright 2025 Urban Company Ltd. All rights reserved. | CIN: U74140DL2014PTC274413</p>
  </div>
</footer>

    );
};

export default Footer;
