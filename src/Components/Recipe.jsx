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
                        <div className='img-div xl:w-80 lg:w-80 md:w-80 sm:w-60 w-32 xl:h-60 lg:h-52 md:h-52 sm:h-52 h-32 float-left p-2'>
                            <img src={imageUrl} alt={recipeName} className='w-full h-full animated-img'/>
                        </div>

                        <h1 className='text-center xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-lg p-2'>{recipeName}</h1>
                        <nav className='tags-holder xl:h-12 lg:h-12 xl:w-9/12 lg:w-8/12 md:w-6/12 sm:w-6/12 w-7/12 inline-block'>
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
                <div className='bottom xl:w-full lg:w-full md:w-full sm:w-full xl:block lg:block md:block sm:block xl:h-80 h-96 xl:mt-0 mt-10 w-full '>
                    <div className='ingredients-contianer xl:absolute lg:absolute md:absolute sm:absolute inline-block xl:w-80 lg:w-80 md:w-80 sm:w-60 w-82 xl:h-64 lg:h-72 md:h-72 sm:h-72 h-44 xl:bottom-2 lg:bottom-2 md:bottom-2 sm:bottom-2 xl:top-72 lg:top-60 md:top-60 sm:top-60 xl:left-2 lg:left-2 md:left-2 sm:left-2  overflow-y-auto overflow-x-auto'>
                        <div className='bg-emerald-700 xl:w-80 lg:w-80 md:w-80 sm:w-60 w-82 h-8 fixed'>
                            <h1 className='xl:text-xl lg:text-xl md:text-xl sm:text-xl text-xl'>Ingredients</h1>
                        </div>
                        <ol className='list-disc'>
                            <div className='h-10 xl:w-70 lg:w-70 md:w-70 sm:w-70 w-70 list-item'></div>
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
                    <div className='steps xl:w-9/12 lg:w-9/12 md:w-9/12 w-11/12 lg:h-32 float-right xl:block lg:block md:block sm:block xl:relative xl:ml-0 lg:absolute md:absolute sm:absolute xl:bottom-0 xl:left-0 xl:top-0 lg:left-80 lg:top-1/4 lg:ml-4 md:bottom-0 md:left-80 md:top-1/4 md:h-80 sm:bottom-0 sm:left-60 sm:top-32'>
                        <h1 className='xl:text-2xl font-bold w-full'>Steps</h1>
                        <div className='block w-full'>
                            <ol className='list-decimal block xl:pl-10 lg:pl-10 md:pl-10 sm:pl-10 pl-10 xl:h-96 lg:h-80 md:h-80 sm:h-80 h-52 overflow-auto w-full'>
                                {
                                    ingredients.map((i,j)=>{
                                        return(
                                            <li className=''>
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