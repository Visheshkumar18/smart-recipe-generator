import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [complexity, setComplexity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ingredients, cookingTime, cuisine, diet, complexity });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Ingredients Input */}
      <div>
        <label className="block text-sm font-medium mb-1">Ingredients</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="e.g. chicken, tomato, onion"
          className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Cooking Time</label>
        <select
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
          className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select time</option>
          <option value="15">Under 15 minutes</option>
          <option value="30">Under 30 minutes</option>
          <option value="45">Under 45 minutes</option>
          <option value="60">Under 1 hour</option>
          <option value="90">Under 1.5 hours</option>
          <option value="120">Under 2 hours</option>
        </select>
      </div>

      {/* Cuisine Type Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-1">Cuisine Type</label>
        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select cuisine</option>
          <option value="indian">Indian</option>
          <option value="italian">Italian</option>
          <option value="chinese">Chinese</option>
          <option value="mexican">Mexican</option>
          <option value="american">American</option>
          <option value="mediterranean">Mediterranean</option>
          <option value="thai">Thai</option>
        </select>
      </div>

      {/* Diet Preference Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Diet Preference
        </label>
        <select
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white "
        >
          <option value="">Select preference</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="keto">Keto</option>
          <option value="paleo">Paleo</option>
          <option value="none">No Preference</option>
        </select>
      </div>
      {/* Complexity */}
      <div>
        <label className="block text-sm font-medium mb-1">Complexity</label>
        <select
          value={complexity}
          onChange={(e) => setComplexity(e.target.value)}
          className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white "
        >
          <option value="">Select complexity</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        Generate Recipe
      </button>
    </form>
  );
};

export default Form;
