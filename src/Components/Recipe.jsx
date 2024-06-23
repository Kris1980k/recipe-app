import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
function RecipeCard({deployModalFn}) {
    return (
        <>
            <div className='fixed mx-auto modal-recipe  w-2/3 h-52 inset-middle z-50 bg-emerald-200 shadow-xl shadow-black'>
                <nav className='bg-emerald-900 h-6 px-2'>
                    <div className='float-right'>
                        <button onClick={()=>{deployModalFn()}}>
                            <FontAwesomeIcon icon={faX} className='text-white'/>
                        </button>
                    </div>
                </nav>
                <h1 className='text-center'>cristian nodal</h1>
            </div>
        </>
    );
}

export default RecipeCard;