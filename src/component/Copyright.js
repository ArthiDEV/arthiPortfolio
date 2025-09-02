import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="copyright-container">
      <div className="copyright-content">
        <p className="text-light-200 text-sm sm:text-base font-medium text-center leading-tight">
          © {currentYear} <span className="text-secondary-300">Arthi Harikrishnan</span>. All rights reserved.
        </p>
        {/* <p className="text-light-300 text-xs sm:text-sm text-center mt-1 leading-tight">
          Crafted with ❤️ using <span className="text-secondary-300">React.js</span>
        </p> */}
      </div>
    </div>
  );
};

export default Copyright;