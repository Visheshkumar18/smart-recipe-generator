import React, { useState } from "react";
import Rating from "./Rating";
import RecipeModal from "./RecipeModel";
const Card = ({ recipe }) => {
  if (!recipe) return null; 
  const[show,setShow]=useState(false);

  return (
    <div className="card bg-base-100 mt-10 w-full max-w-sm mx-auto shadow-md hover:shadow-lg transition duration-300">
  {/* Image */}
  <figure className="px-4 pt-4">
    <img
      src={recipe.image}
      alt={recipe.name}
      className="rounded-xl w-full h-48 sm:h-56 md:h-64 object-cover"
    />
  </figure>

  {/* Body */}
  <div className="card-body items-center text-center">
    <h2 className="card-title text-lg sm:text-xl">{recipe.name}</h2>
    <p className="text-gray-500 text-sm sm:text-base">{recipe.cuisine}</p>

    {/* Button */}
    <div className="card-actions mt-2 flex flex-col sm:flex-row gap-2">
      <button
        className="btn btn-primary w-full sm:w-auto"
        onClick={() => {setShow((prev)=>!prev)}}
      >
        Recipe Details
      </button>
    </div>

    {/* Rating */}
    <div className="mt-2">
      <Rating value={recipe.rating} id={recipe.id} />
    </div>
  </div>
  {show && <RecipeModal recipe={recipe} onClose={() => setShow(false)} />}
</div>

  );
};

export default Card;
