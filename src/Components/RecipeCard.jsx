import React, { useEffect } from 'react'

function RecipeCard({image,label,cuisineType,deployModal,id}) {
    return (
        <>        
        <div onClick={()=>{deployModal(id)}} className='card xl:h-128 lg:h-96 md:h-96 sm:h-96 h-72 bg-gradient-to-tr xl:p-0 lg:p-0 md:p-0 sm:p-0 p-2 bg-emerald-600 shadow-md  hover:scale-105 transition-all hover:z-30'>
            <h3 className='bg-red-600 rounded-full absolute xl:w-20 lg:w-20 md:w-20 sm:w-20 w-20 text-white text-center capitalize'>{cuisineType}</h3>                  
            <div className='image-div w-full xl:h-5/6 lg:h-5/6 md:h-5/6 sm:h-5/6 h-5/6'>  
                <img src={image} alt={label} className='w-full h-full mx-auto'/>                        
            </div>
            <div className='w-full xl:h-1/6 lg:h-1/6 md:h-1/6 sm:h-1/6 h-1/6  flex items-center justify-center xl:overflow-auto lg:overflow-auto md:overflow-auto sm:overflow-auto overflow-scroll'>
                <h1 className='text-center xl:text-xl lg:text-xl md:text-xl sm:text-xl text-md'>{label}</h1>                    
            </div>
        </div>
        </>
    );
}


//<h3 className='bg-red-700 rounded-full absolute z-20 top-2 h-6 w-32'>{cuisineType}</h3>
export default RecipeCard;