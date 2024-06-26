import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
function Recipe({closeModal,recipeName,healthLabels,imageUrl,ingredients,quantities}) {
    return (
        <>
            <div className='fixed mx-auto modal-recipe  xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 w-11/12 xl:h-4/5 lg:h-4/5 md:h-4/5 sm:h-4/5 11/12 inset-middle z-50 bg-emerald-200 shadow-xl shadow-black'>
                <nav className='bg-emerald-900 h-6 px-2'>
                    <div className='float-right'>
                        <button onClick={()=>{closeModal()}}>
                            <FontAwesomeIcon icon={faX} className='text-white'/>
                        </button>
                    </div>
                </nav>
                <div className='flex xl:p-2'>
                    <div className='w-2/5'>
                        <img src={imageUrl} alt={recipeName} className='xl:h-80 lg:h-52 md:h-52 sm:h-52 h-52 xl:w-full lg:w-full md:w-full sm:w-full w-full xl:p-0 p-2' />
                    </div>
                    <div className='flex flex-col w-3/5'>
                        {/*xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-3/5 w-3/5 */}
                        <h1 className='text-center xl:text-xl lg:text-xl md:text-xl sm:text-xl text-xl inline-block h-18'>
                            {recipeName}
                        </h1>
                        <nav className='flex items-center w-full overflow-x-scroll h-20'>
                            {healthLabels.map((lab) => {
                                return(
                                    <>
                                    <div key={Math.random()} className='bg-gradient-to-r from-blue-400 to-blue-300 text-white flex items-center justify-center mx-2 h-10 w-36 rounded-full'>
                                    {/*<h1 className='xl:w-44 lg:w-44 md:w-44 sm:w-44 w-44 xl:h-10 lg:h-10 md:h-10 sm:h-10 h-10  text-center border-2 '></h1>  */}
                                        <h1 className='text-center w-36'>{lab}</h1>      
                                    </div>
                                    </>                                
                                )})}
                        </nav>
                        <div className='flex items-center border-2'>
                            <h1 className='text-center'>
                                Steps goes here
                            </h1>
                        </div>
                    </div>                                        
                </div>                        
                <div className='flex flex-row w-2/5 xl:h-64 lg:h-64 md:h-64 sm:h-64 h-96 my-2'>
                            <ul className='w-full h-full overflow-y-scroll'>
                                {
                                    ingredients.map((e,i)=>{
                                        return(
                                            <>
                                                <li className='xl:text-sm lg:text-lg md:text-lg sm:text-lg text-lg w-full xl:h-16 lg:h-16 md:h-16 sm:h-16 h-16 block p-2'>
                                                    <h3 className='inline-block xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-96 h-12 capitalize border-2'>
                                                        {e}
                                                    </h3>
                                                    <h3 className='inline-block float-right xl:w-2/12 border-4 '>
                                                        {quantities[i].toFixed(2)} Pieces
                                                    </h3>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>        
            </div>
        </>
    );
}

export default Recipe;