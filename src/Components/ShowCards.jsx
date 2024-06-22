import React from 'react'
import RecipeCard from './RecipeCard'
function ShowCards({items}) {
    return (<>
    <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2'>
        {
            items.map((i, key) =>{
                return(
                <div key={i.recipe.label + key} className='xl:h-96 bg-red-600 hover:scale-105 transition-all'>
                    <img src={i.recipe.image} alt={i.recipe.label} />                
                    <h2>{i.recipe.label}</h2>
                </div>
            )})
        }
    </div>
    </>);
}

export default ShowCards;