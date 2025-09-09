import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";

const NewRecipe = () => {
  const [chatResponse, setChatResponse] = useState("");

  const handleFormSubmit = async (formData) => {
    setChatResponse("Fetching recipe suggestions...");

    try {
      const res = await axios.post("/recipe", formData); 
      setChatResponse(res.data.response || "No response received");
    } catch (err) {
      setChatResponse("Error fetching recipe.");
    }
  };

  return (
    <div className="flex justify-center items-center w-screen min-h-screen bg-gradient-to-br from-gray-900 to-black pt-24 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        
        {/* Left: Form */}
        <div className="p-6 bg-gray-900 text-white border border-gray-700 rounded-2xl shadow-lg">
          {/* <h2 className="text-2xl font-semibold mb-4 text-center"></h2> */}
          <Form onSubmit={handleFormSubmit} />
        </div>

        {/* Right: ChatGPT Response */}
        <div className="p-6 bg-gray-900 text-white border border-gray-700 rounded-2xl shadow-lg flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-center">AI Recipe Suggestions</h2>
          <div className="flex-1 overflow-y-auto whitespace-pre-wrap custom-scrollbar">
            {chatResponse ? chatResponse : "Fill the form to generate a recipe."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRecipe;
