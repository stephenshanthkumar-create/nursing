
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base text-slate-500">&copy; {new Date().getFullYear()} Critical Care Made Simple. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
