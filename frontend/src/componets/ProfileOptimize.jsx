import React, { useState } from 'react';

const ProfileOptimize = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [autoOptimize, setAutoOptimize] = useState(false);

  const handleAutoOptimize = () => {
    setAutoOptimize(!autoOptimize);
  };

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const optimizeProfile = () => {
    // API call to optimize profile based on job title and description
    console.log('Optimizing profile for', jobTitle, 'with description', description);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto font-sans overflow-y-auto">
    <h1 className="text-2xl font-bold mb-4 text-center">Profile Optimize</h1>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAutoOptimize();
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-gray-700 mb-1">Job Title:</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => handleJobTitleChange(e.target.value)}
          placeholder="Enter your job title"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Description:</label>
        <textarea
          value={description}
          onChange={(e) => handleDescriptionChange(e.target.value)}
          placeholder="Enter your description"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Auto Optimize:</label>
        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          onClick={handleAutoOptimize}
        >
          {autoOptimize ? 'Disable Auto Optimize' : 'Enable Auto Optimize'}
        </button>
      </div>
      {autoOptimize && (
        <div>
          <label className="block text-gray-700 mb-1">Optimize Profile:</label>
          <button
            type="button"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
            onClick={optimizeProfile}
          >
            Optimize Profile
          </button>
        </div>
      )}
    </form>
  </div>
  );
};

export default ProfileOptimize;