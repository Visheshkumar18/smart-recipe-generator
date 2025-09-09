import React from "react";

const Rating = ({ value, id }) => {
  // Round to nearest whole star (API gives decimal ratings like 4.6)
  const rounded = Math.round(value);

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <input
          key={star}
          type="radio"
          name={`rating-${id}`}   
          className="mask mask-star-2 bg-green-500"
          aria-label={`${star} star`}
          defaultChecked={star === rounded}
          readOnly
        />
      ))}
    </div>
  );
};

export default Rating;
