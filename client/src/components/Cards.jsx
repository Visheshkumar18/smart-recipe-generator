import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        if (response.ok) {
          const parsedData = await response.json();
          console.log("API Response:", parsedData);
          setData(parsedData.recipes);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-3 p-4 mt-22 sm:mt-2 ">
      {data.map((recipe) => (
        <div className="p-3" key={recipe.id}>
          <Card recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
