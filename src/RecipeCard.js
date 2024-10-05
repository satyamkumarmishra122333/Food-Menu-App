// src/RecipeCard.js
import React, { useState } from 'react';
import Timer from './Timer'; // Import the Timer component

const RecipeCard = ({ recipe }) => {
    const [isCooking, setIsCooking] = useState(false);
    const cookingTime = 30; // Set a default cooking time (in seconds)

    return (
        <div className="recipe-card">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
            <p>{recipe.strInstructions}</p>
            {isCooking ? (
                <Timer startTime={cookingTime} />
            ) : (
                <button onClick={() => setIsCooking(true)}>
                    Start Cooking
                </button>
            )}
        </div>
    );
};

export default RecipeCard;
