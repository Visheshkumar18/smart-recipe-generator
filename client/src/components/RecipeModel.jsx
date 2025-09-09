import React from "react";

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md p-4">
      <div className="relative w-full max-w-6xl h-[90vh] rounded-lg shadow-lg flex overflow-hidden">
        {/* Left: Fixed Image */}
        <div className="md:w-1/2 h-full">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Scrollable Content */}
        <div className="md:w-1/2 h-full overflow-y-auto p-6 flex flex-col gap-4">
          {/* Close Button */}
          <button
            className="absolute top-2 right-4 cursor-pointer text-gray-600 hover:text-black text-2xl z-10 "
            onClick={onClose}
          >
            ✖
          </button>

          <h2 className="text-3xl font-bold">{recipe.name}</h2>
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
          <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} min</p>
          <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} min</p>
          <p><strong>Calories/Serving:</strong> {recipe.caloriesPerServing}</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>

          {/* Ingredients */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside space-y-1">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
            <ol className="list-decimal list-inside space-y-1">
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
