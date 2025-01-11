import React, { useState } from "react";

const SummaryGenerator = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [profession, setProfession] = useState("");
  const [interests, setInterests] = useState("");
  const [expertise, setExpertise] = useState("");
  const [hobby, setHobby] = useState("");
  const [tone, setTone] = useState("");
  const [summary, setSummary] = useState("");

  const generateSummary = () => {
    if (!name || !location || !profession || !interests || !expertise || !hobby) {
      setSummary("Please fill in all the fields to generate a summary.");
      return;
    }

    const summaryText = `Hi, I'm ${name} from ${location}. I'm a ${profession} with a passion for ${interests}. I'm skilled in ${expertise} and enjoy ${hobby} in my free time. ${
      tone === "casual"
        ? "Let's connect and see what we can achieve together!"
        : "I'm excited to connect with like-minded professionals and explore new opportunities."
    }`;
    setSummary(summaryText);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto font-sans overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Summary Generator</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          generateSummary();
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Profession:</label>
          <input
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            placeholder="Enter your profession"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Interests:</label>
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="Enter your interests"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Expertise:</label>
          <input
            type="text"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            placeholder="Enter your expertise"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Hobby:</label>
          <input
            type="text"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
            placeholder="Enter your hobby"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Tone:</label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Select a tone</option>
            <option value="casual">Casual</option>
            <option value="professional">Professional</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Generate Summary
        </button>
      </form>
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800">Generated Summary:</h2>
        <p className="mt-2 text-gray-600">{summary}</p>
      </div>
    </div>
  );
};

export default SummaryGenerator;
