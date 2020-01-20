
import React, {useEffect, useState} from'react';
import Recipes from './Recipes';
// import uuidv4 from 'uuid/v4'
import './App.css';



function App() {
const API_ID = 'c38daf94';
const API_KEY = '850d468a3e994692691631c7c259406c';


const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState(" ");
const [query, setQuery] = useState('chicken');

useEffect(() => {
  getRecipes();
}, [query]);
  
  const getRecipes = async() => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    )
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateRecipes = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
  }
    return(
    
      <div className="container">
        <input className="input" onChange={updateRecipes} value={search} type="text"></input>
        <button className="search-button"type="submit" onClick={getSearch}>Search</button>
          <div>
          {recipes.map(recipe => (
          <Recipes 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}  
            ingredients={recipe.recipe.ingredients} />
        ))}
        </div>
      </div>
      
    );
  }
  
  export default App;

