import React from 'react';

function Section({ id, title, description, children }) {
  return (
    <section
      id={id}
      className="pt-16 px-8 pb-8 mx-auto w-[90%] max-w-[925px] h-auto bg-slate-800 sm:bg-slate-900/80 sm:backdrop-blur-none md:bg-slate-800 md:backdrop-blur-md rounded-lg shadow-lg border border-white/20"
    >
      <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-indigo-300 mb-1">
        {title}
      </h2>
      <p className="text-md sm:text-sm md:text-base lg:text-md text-gray-300">
        {description}
      </p>
      {children}
    </section>
  );
}

export default Section;
