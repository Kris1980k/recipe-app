import React,{useEffect} from 'react'
import RecipeCard from './RecipeCard'
import Recipe from './Recipe'
function ShowCards({items}) {

    function deployModal(){
        const modal = document.getElementById("modal-menu").classList;
        console.log("veneno")
        modal.contains("hidden") ? modal.replace("hidden","block") : modal.replace("block","hidden")
    }

    useEffect(()=>{
        let cards = document.getElementsByClassName("card");
        [].forEach.call(cards,(e)=>{
            e.addEventListener("click",()=>{
                deployModal();
            })
        })          
    },[]);

    return (<>
    <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 xl:p-4 bg-emerald-300'>
    <div id='modal-menu' className='bg-black/80 w-screen inset-middle-black h-screen fixed z-50 block'>
            <Recipe deployModalFn={deployModal}/>
    </div>
        {
            items.map((i,k) =>{
                return(
                <div key={k} className='xxx'>
                    <RecipeCard image={i.recipe.image} label={i.recipe.label}cuisineType={i.recipe.cuisineType}/>
                </div>
            )})
        }
    </div>
    </>);
}

export default ShowCards;