import React,{useState,useEffect} from 'react'
import RecipeCard from './RecipeCard'
import Recipe from './Recipe'
function ShowCards({items}) {
    const [recipeName,setRecipeName] =useState('');
    const [healthLabels, setHealthLabels] = useState([]);
    const [image, setImage] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [quantities, setQuantities] = useState([]);

    useEffect(()=>{console.log(quantities)},[quantities])

    function deployModal(id){
        const modalC = document.getElementById("modal-menu").classList;
        const objArr = items.filter((item)=>{
            return item.index === id;
        });
        const obj = objArr[0].recipe;        
        setRecipeName(obj.label)
        setHealthLabels(obj.healthLabels)
        setImage(obj.image)
        const ingredientList = obj.ingredients.map((e)=>{
            return e.text
        })
        const quantitiesList = obj.ingredients.map((e)=>{
            return e.quantity
        })

        setIngredients([...ingredients,...ingredientList])
        setQuantities([...quantities, ...quantitiesList])
        console.log(obj)

        if (modalC.contains("hidden")){
            modalC.replace("hidden","block");
         } else {modalC.replace("block","hidden")}

    }

    function closeModal(){
        const modalC = document.getElementById("modal-menu").classList;
        setIngredients([])     
        setQuantities([])
        if (modalC.contains("hidden")){
            modalC.replace("hidden","block");
         } else {modalC.replace("block","hidden")}
    }

    return (<>
    <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 xl:p-4 bg-emerald-300'>
    <div id='modal-menu' className='bg-black/80 w-screen inset-middle-black h-screen fixed z-50 hidden'>
            <Recipe closeModal={closeModal} recipeName={recipeName} healthLabels={healthLabels} imageUrl={image} ingredients={ingredients} quantities={quantities}/>
    </div>
        {
            items.map((i,k) =>{
                return(
                <div key={k} className='xxx'>
                    <RecipeCard image={i.recipe.image} label={i.recipe.label}cuisineType={i.recipe.cuisineType} deployModal={deployModal} id={i.index}/>
                </div>
            )})
        }
    </div>
    </>);
}

export default ShowCards;