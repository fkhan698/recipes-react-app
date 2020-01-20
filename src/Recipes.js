import React from 'react'

export default function Recipes({ title, calories, image, ingredients }) {
    return (
        <div className="recipes">
            <h1 className="h1">{title}</h1>
            <p>{Math.round(calories)} Calories</p>
            <img className="img" src = {image} alt = " "></img>
            <div>
                <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                
                ))}

                </ul>
            </div>
    
                
        </div>
       
    )
}
