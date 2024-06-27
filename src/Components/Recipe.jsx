import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
function Recipe({closeModal,recipeName,healthLabels,imageUrl,ingredients,quantities}) {
    {console.log(ingredients)}
    return (
            <div className='bg-emerald-300 xl:w-11/12 xl:h-128  inset-middle absolute modal-recipe'>
                <div className='top xl:float-none float-start w-full'>
                    <nav className='top-bar bg-emerald-900 xl:w-full w-full xl:h-6 h-6'>
                        <div className='exit-btn' onClick={()=>{closeModal()}}>
                            <FontAwesomeIcon icon={faX} className='text-white float-right p-1 cursor-pointer'/>
                        </div>
                    </nav>
                    <div className='title-div p-2'>
                        <div className='img-div xl:w-80 w-32 xl:h-60 h-32 float-left p-2'>
                            <img src={imageUrl} alt={recipeName} className='w-full h-full animated-img'/>
                        </div>

                        <h1 className='text-center xl:text-2xl text-lg p-2'>{recipeName}</h1>
                        <nav className='tags-holder xl:h-12 xl:w-9/12 w-7/12 inline-block'>
                            <ul className='w-full h-full flex overflow-clip overflow-x-auto'>
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
                <div className='bottom xl:w-full xl:block xl:h-80 h-96 xl:mt-0 mt-10 w-full '>
                    <div className='ingredients-contianer xl:absolute inline-block xl:w-80 w-82 xl:h-72 h-44 xl:bottom-2 xl:top-72 xl:left-2 overflow-y-auto overflow-x-auto '>
                        <div className='bg-emerald-700 xl:w-80 w-82 h-8 fixed'>
                            <h1 className='xl:text-xl'>Ingredients</h1>
                        </div>
                        <ol className='list-disc'>
                            <div className='h-10 xl:w-70 w-70 list-item'></div>
                            {
                                ingredients.map((i,index)=>{
                                    return(
                                        <li className={ index % 2 ? 'pl-2 text-red-600 capitalize list-item' : 'pl-2 text-blue-600 capitalize list-item '}>
                                            {i}                                          
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                    <div className='steps xl:w-9/12 w-11/12 float-right xl:block xl:relative xl:bottom-0 xl:ml-0 '>
                        <h1 className='xl:text-2xl font-bold'>Steps</h1>
                        <hr />
                        <div>
                            <ol className='list-decimal xl:pl-0 pl-0'>
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
    );
}

export default Recipe;