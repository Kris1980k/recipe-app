import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
function Recipe({closeModal,recipeName,healthLabels,imageUrl}) {
    return (
        <>
            <div className='fixed mx-auto modal-recipe  w-2/3 h-4/5 inset-middle z-50 bg-emerald-200 shadow-xl shadow-black'>
                <nav className='bg-emerald-900 h-6 px-2'>
                    <div className='float-right'>
                        <button onClick={()=>{closeModal()}}>
                            <FontAwesomeIcon icon={faX} className='text-white'/>
                        </button>
                    </div>
                </nav>
                <div className='flex xl:p-2'>
                    <img src={imageUrl} alt={recipeName} className='xl:w-2/5 lg:w-2/5 md:w-2/5 sm:w-2/5 w-2/5 xl:h-80 lg:h-80 md:h-80 sm:h-80 h-80' />
                    <div className='flex flex-col xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-3/5 w-3/5'>
                        <h1 className='text-center xl:text-xl lg:text-xl md:text-xl sm:text-xl text-xl'>{recipeName}</h1>
                        <nav className='flex items-center overflow-y-hidden overflow-x-scroll w-full h-20'>
                            {healthLabels.map((lab) => {
                                return(<div key={Math.random()} className='bg-gradient-to-r from-blue-400 to-blue-300 text-white rounded-full mx-1 flex overflow-clip items-center w-44 h-10'>                                    
                                    <h1 className='w-44 h-10  text-center border-2'>
                                    {lab}
                                    </h1>
                                </div>)
})}
                        </nav>
                    </div>
                </div>                                
            </div>
        </>
    );
}

export default Recipe;