import React, { useState } from 'react';
import ManagePost from '../componets/ManagePost';
import ProfileOptimize from '../componets/ProfileOptimize';
import SummaryGenerator from '../componets/SummeryGenerator';
import Home from '../componets/Home';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-blue-400 w-full flex h-screen ">
      <div className="w-[20vw] h-full bg-slate-800 overflow-y-hidden">
        {/* Sidebar content */}
        <div className='flex justify-center mt-5'>
          <div className='text-slate-300 font-bold text-2xl'>
            Linkdin
          </div>
        </div>
        <div className='flex h-screen items-start justify-start mt-10'>

          <ul className="text-white space-y-2  flex flex-col justify-evenly px-2 w-full ">
            <li
              className={`hover:bg-slate-600  py-1 cursor-pointer px-9 rounded-md ${
                currentPage === 'home' ? 'bg-slate-600' : ''
              }`}
              onClick={() => handlePageChange('home')}
            >
              Home
            </li>
            <li
              className={`hover:bg-slate-600  py-1 cursor-pointer px-9 rounded-md ${
                currentPage === 'profile' ? 'bg-slate-600' : ''
              }`}
              onClick={() => handlePageChange('post')}
            >
              Manage Post
            </li>
            <li
              className={`hover:bg-slate-600  py-1 cursor-pointer px-9 rounded-md ${
                currentPage === 'Optimize' ? 'bg-slate-600' : ''
              }`}
              onClick={() => handlePageChange('Optimize')}
            >
              Optimize
            </li>
            <li
              className={`hover:bg-slate-600  py-1 cursor-pointer px-9 rounded-md ${
                currentPage === 'summary' ? 'bg-slate-600' : ''
              }`}
              onClick={() => handlePageChange('summary')}
            >
              Summary Generator
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[80vw] h-full bg-blue-50 overflow-y-auto">
        {/* Main content */}
        {currentPage === 'home' && (
          <div className="p-10">
            <Home/>
            
          </div>
        )}
        {currentPage === 'post' && (
          <div className="p-10">
            <ManagePost/>
          </div>
        )}
        {currentPage === 'Optimize' && (
          <div className="p-10">
           <ProfileOptimize/>
            </div>
        )}
        {currentPage === 'summary' && (
          <div className="p-10 overflow-y-auto">
            <SummaryGenerator/>
            </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;