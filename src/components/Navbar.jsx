import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-800 py-7 sticky top-0 z-50 shadow-lg text-white">
      <div className="container mx-auto px-4">
        <ul className="hidden md:flex justify-center text-sm tracking-[.08em]">
          <li><a href="#overview" className="hover:text-cyan-400 uppercase">Overview</a></li>
          <li><a href="#authentication" className="hover:text-cyan-400 uppercase">Authentication</a></li>
          <li><a href="#endpoints" className="hover:text-cyan-400 uppercase">Endpoints</a></li>
          <li><a href="#tutorial" className="hover:text-cyan-400 uppercase">Tutorial</a></li>
          <li><a href="#code-examples" className="hover:text-cyan-400 uppercase">Code Examples</a></li>
          <li><a href="#pricing" className="hover:text-cyan-400 uppercase">Pricing</a></li>
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="md:hidden bg-slate-800 flex flex-col items-center space-y-4 py-4">
          <li><a href="#overview" onClick={handleLinkClick} className="hover:text-cyan-400 uppercase">Overview</a></li>
          <li><a href="#authentication" onClick={handleLinkClick} className="hover:text-cyan-400 uppercase">Authentication</a></li>
          <li><a href="#endpoints" onClick={handleLinkClick} className="hover:text-cyan-400 uppercase">Endpoints</a></li>
          <li><a href="#tutorial" onClick={handleLinkClick} className="hover:text-cyan-400 uppercase">Tutorial</a></li>
          <li><a href="#code-examples" onClick={handleLinkClick} className="hover:text-cyan-400 uppercase">Code Examples</a></li>
          <li><a href="#pricing" onClick={handleLinkClick} className="hover:text-cyan-400 uppercase">Pricing</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
