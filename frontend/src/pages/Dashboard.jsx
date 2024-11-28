import React, { useState } from 'react';
import ManagePost from '../componets/ManagePost';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-blue-400 w-full flex h-screen fixed">
      <div className="w-[20vw] h-full bg-slate-800">
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
                currentPage === 'settings' ? 'bg-slate-600' : ''
              }`}
              onClick={() => handlePageChange('settings')}
            >
              Settings
            </li>
            <li
              className={`hover:bg-slate-600  py-1 cursor-pointer px-9 rounded-md ${
                currentPage === 'logout' ? 'bg-slate-600' : ''
              }`}
              onClick={() => handlePageChange('logout')}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[80vw] h-full bg-blue-50">
        {/* Main content */}
        {currentPage === 'home' && (
          <div className="p-10">
            <h1 className="text-3xl font-bold mb-4">Home</h1>
            <p className="text-lg">This is the home page content.</p>
          </div>
        )}
        {currentPage === 'post' && (
          <div className="p-10">
            <ManagePost/>
          </div>
        )}
        {currentPage === 'settings' && (
          <div className="p-10">
            <h1 className="text-3xl font-bold mb-4">Settings Page</h1>
            <p className="text-lg">This is the settings page content.</p>
          </div>
        )}
        {currentPage === 'logout' && (
          <div className="p-10">
            <h1 className="text-3xl font-bold mb-4">Logout Page</h1>
            <p className="text-lg">This is the logout page content.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;