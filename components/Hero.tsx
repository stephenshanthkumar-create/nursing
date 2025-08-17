
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
       <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
            <span className="block">Master the ICU: Your Bridge from</span>
            <span className="block text-teal-600">Classroom to Critical Care</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-slate-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Prepare for your nursing career with real-world ICU knowledge & skills. Bridge the gap between theory and hospital practice, while boosting your employability and confidence.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10 transition"
              >
                Enroll Now
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#course-structure"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 transition"
              >
                View Modules
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
