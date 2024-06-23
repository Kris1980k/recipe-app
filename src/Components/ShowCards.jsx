import React from 'react'
import RecipeCard from './RecipeCard'
function ShowCards({items}) {
    return (<>
    <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 xl:p-4 bg-emerald-300'>
        {
            items.map((i) =>{
                return(
                <RecipeCard image={i.recipe.image} label={i.recipe.label}cuisineType={i.recipe.cuisineType}/>
            )})
        }
    </div>
    </>);
}

export default ShowCards;