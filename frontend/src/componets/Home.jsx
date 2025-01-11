import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('/api/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto font-sans overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">User Profile</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-center">
          <img
            src={user.image}
            alt={user.name}
            className="w-24 h-24 rounded-full"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-medium">{user.name}</h2>
          <p className="text-sm text-gray-600">@{user.username}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-sm text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-600">{user.linkedinDescription}</p>
        </div>
        <div className="flex justify-center">
          <a
            href={user.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            View LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;