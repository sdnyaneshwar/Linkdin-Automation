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

    // fetch('/api/posts', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(postData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Manage Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Post Text:</label>
          <textarea
            type="text"
            name="text"
            value={postData.text}
            onChange={handleInputChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Input Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Select Type:</label>
          <select
            name="type"
            value={postData.type}
            onChange={handleTypeChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
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
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Select Date and Time:</label>
          <input
            type="datetime-local"
            name="dateTime"
            value={postData.dateTime}
            onChange={handleDateTimeChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ManagePost;