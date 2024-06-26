import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
function Recipe({closeModal,recipeName,healthLabels,imageUrl,ingredients,quantities}) {
    {console.log(ingredients)}
    return (
        <>
            <div className='bg-emerald-300 xl:w-11/12 xl:h-128 inset-middle absolute'>
                <div className='top'>
                    <nav className='top-bar bg-emerald-900 xl:w-full w-full xl:h-6 h-6'>
                        <div className='exit-btn' onClick={()=>{closeModal()}}>
                            <FontAwesomeIcon icon={faX} className='text-white float-right p-1 cursor-pointer'/>
                        </div>
                    </nav>
                    <div className='title-div p-2'>
                        <div className='img-div xl:w-80 xl:h-60 float-left p-2'>
                            <img src={imageUrl} alt={recipeName} className='w-full h-full'/>
                        </div>

                        <h1 className='text-center xl:text-2xl p-2'>{recipeName}</h1>
                        <nav className='tags-holder xl:h-12 xl:w-9/12 inline-block'>
                            <ul className='w-full h-full flex overflow-x-auto'>
                                {healthLabels.map((t)=>{
                                    return(
                                        <li className='rounded-full bg-gradient-to-tr from-blue-400 to-blue-200 xl:text-md text-md m    x-2 w-auto xl:h-8 h-8'>
                                            <h1 className='xl:h-8 h-8 xl:w-36 w-36 text-center'>
                                                {t} 
                                            </h1>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='ingredients-contianer absolute xl:w-80 xl:h-72 xl:bottom-2 xl:left-2 overflow-y-auto'>
                        <h1 className='xl:text-xl'>Ingredients</h1>
                        <ul className='overflow-y-auto list-disc'>
                            {
                                ingredients.map((i,index)=>{
                                    return(
                                        <li className={ index % 2 ? 'px-2 text-red-600' : 'px-2 text-blue-600'}>
                                            {i}                                            
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='steps w-9/12 float-right'>
                        <h1 className='xl:text-2xl font-bold'>Steps</h1>
                        <hr />
                        <div>
                            <ol className='list-decimal'>
                                {
                                    ingredients.map((i,j)=>{
                                        return(
                                            <li>
                                                Step ...        
                                            </li>                                                                                
                                        )
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recipe;