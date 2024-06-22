import React from 'react'

function SearchBar({search,updateSearch}) {
    return (
        <>
        <header className='bg-emerald-300'>
            <div className='w-full flex flex-col items-center'>
                <h1 className='xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-3xl text-center'>Search for your food !</h1>
                <input className='xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 w-96 xl:h-14 lg:h-14 md:h-14 sm:h-14 h-14 xl:px-4 lg:px-4 md:px-4 sm:px-4 px-4 xl:text-xl lg:text-xl md:text-xl sm:text-xl text-xl bg-emerald-100 rounded-full' type="text" placeholder='What do you crave for today? ' value={search} onChange={(e) => {updateSearch(e)}}/>
            </div>
        </header>
        </>
    );
}

export default SearchBar;