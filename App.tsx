import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ModuleCard from './components/ModuleCard';
import Footer from './components/Footer';
import { COURSE_MODULES, BONUS_MODULE } from './constants';
import { CertificateIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />
      <main>
        <Hero />
        
        <section id="course-structure" className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Course Structure</h2>
              <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                A Comprehensive ICU Curriculum
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
                Each module is designed to build your skills progressively, from fundamentals to advanced critical care scenarios.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {COURSE_MODULES.map((module) => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
            
            <div className="mt-16">
              <div className="text-center mb-8">
                 <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Plus, a Career-Defining Bonus Module
                 </h3>
              </div>
              <div className="max-w-3xl mx-auto">
                 <ModuleCard module={BONUS_MODULE} isBonus={true} />
              </div>
            </div>
          </div>
        </section>

        <section id="certification" className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Certification</h2>
                <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                  Earn Your Critical Care Essentials Certificate
                </p>
                <p className="mt-4 text-xl text-slate-500">
                  Upon successful completion of all modules, you will receive a professional certificate from Critical Care Made Simple, validating your newly acquired skills and knowledge, ready to be showcased to future employers.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition"
                  >
                    Enroll Now & Get Certified
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 flex justify-center items-center">
                 <div className="bg-slate-100 p-8 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                   <CertificateIcon className="w-64 h-64 text-teal-500" />
                   <p className="text-center font-semibold text-slate-700 mt-4">Critical Care Essentials</p>
                   <p className="text-center text-sm text-slate-500">Certificate of Completion</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;