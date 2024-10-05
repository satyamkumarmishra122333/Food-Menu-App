// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import './App.css';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetching recipes from the API
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
            .then((response) => {
                setRecipes(response.data.meals); // Set the fetched meals to the state
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching recipes:', error);
                setLoading(false);
            });
    }, []);

    // Function to handle input change
    const handleSearch = (e) => {
        setSearchTerm(e.target.value); // Update the search term state
    };

    // Filter recipes based on the search term
    const filteredRecipes = recipes.filter(recipe =>
        recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive match
    );

    return (
        <div className="App">
            <h1>THE CHICKEN COOP</h1>
            <input
                type="text"
                placeholder="Search for a recipe..."
                value={searchTerm} // Set the value to the search term state
                onChange={handleSearch} // Call handleSearch on input change
                className="search-input"
            />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="recipe-container">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map((recipe) => (
                            <RecipeCard key={recipe.idMeal} recipe={recipe} />
                        ))
                    ) : (
                        <p>No recipes found</p> // Message when no recipes match the search term
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
