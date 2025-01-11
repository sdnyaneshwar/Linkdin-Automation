import React, { useState } from 'react';

const ManagePost = () => {
  const [postData, setPostData] = useState({
    text: '',
    image: null,
    type: '',
    dateTime: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleImageChange = (event) => {
    setPostData({ ...postData, image: event.target.files[0] });
  };

  const handleTypeChange = (event) => {
    setPostData({ ...postData, type: event.target.value });
  };

  const handleDateTimeChange = (event) => {
    setPostData({ ...postData, dateTime: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(postData);

    fetch('http://localhost:8800/api/v1/users/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto font-sans overflow-y-auto">
  <h1 className="text-2xl font-bold mb-4 text-center">Manage Post</h1>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="block text-gray-700 mb-1">Post Text:</label>
      <textarea
        type="text"
        name="text"
        value={postData.text}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
    <div>
      <label className="block text-gray-700 mb-1">Input Image:</label>
      <input
        type="file"
        name="image"
        onChange={handleImageChange}
        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
    <div>
      <label className="block text-gray-700 mb-1">Select Type:</label>
      <select
        name="type"
        value={postData.type}
        onChange={handleTypeChange}
        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <option value="">Select Type</option>
        <option value="simple_post">Simple Post</option>
        <option value="create_event">Create Event</option>
        <option value="occasion">Occasion</option>
        <option value="hiring">Hiring</option>
        <option value="poll">Poll</option>
        <option value="add_document">Add Document</option>
      </select>
    </div>
    <div>
      <label className="block text-gray-700 mb-1">Select Date and Time:</label>
      <input
        type="datetime-local"
        name="dateTime"
        value={postData.dateTime}
        onChange={handleDateTimeChange}
        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
    >
      Submit
    </button>
  </form>
</div>
  );
};

export default ManagePost;