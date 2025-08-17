
import React from 'react';
import type { Module } from '../types';

interface ModuleCardProps {
  module: Module;
  isBonus?: boolean;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, isBonus = false }) => {
  const borderColor = isBonus ? 'border-amber-400' : 'border-teal-500';
  const bgColor = isBonus ? 'bg-amber-50' : 'bg-white';
  const headerTextColor = isBonus ? 'text-amber-900' : 'text-slate-900';
  const badgeTextColor = isBonus ? 'text-amber-800' : 'text-teal-800';
  const badgeBgColor = isBonus ? 'bg-amber-100' : 'bg-teal-100';


  return (
    <div className={`flex flex-col rounded-lg shadow-lg overflow-hidden h-full transform hover:-translate-y-1 transition-transform duration-300 border-t-4 ${borderColor} ${bgColor}`}>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-teal-600">
            {isBonus ? 'Bonus Module' : `Module ${module.id}`}
          </p>
          <div className="block mt-2">
            <p className={`text-xl font-semibold ${headerTextColor}`}>{module.title}</p>
            <p className="mt-3 text-base text-slate-500">{module.description}</p>
            <ul className="mt-4 space-y-2 text-slate-600">
              {module.topics.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <svg className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex items-center text-sm text-slate-500">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${badgeBgColor} ${badgeTextColor}`}>
              {module.icon}
              <span>{module.format}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
