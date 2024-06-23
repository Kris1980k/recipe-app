import React from 'react'

function SearchBar({search,updateSearch,updateItems}) {
    return (
        <>
        <header className='bg-emerald-300 fixed z-50 w-full p-2'>
            <div className='w-full flex flex-col items-center'>
                <h1 className='xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-3xl text-center pb-2  '>foodpedia.com</h1>
                    <form action="" onSubmit={updateItems}>
                        <div className='xl:w-128 lg:w-128  md:w-128 sm:w-128 xl:block flex'>
                            <input className='outline-none focus:border-2 border-emerald-900 text-emerald-900 xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-2/3 w-3/4 xl:h-14 lg:h-14 md:h-14 sm:h-14 h-14 xl:px-4 lg:px-4 md:px-4 sm:px-4 px-4 xl:text-xl lg:text-xl md:text-xl sm:text-xl text-xl bg-emerald-100 rounded-l-full' type="text" placeholder='What are you craving for today? ' value={search} onChange={(e) => {updateSearch(e)}}/>
                            <button className='bg-emerald-900 hover:bg-emerald-950  xl:text-xl lg:text-xl md:text-xl sm:text-xl text-xl xl:h-14 lg:h-14 md:h-14 sm:h-14 h-14 text-white rounded-r-full xl:w-1/5 lg:w-1/5 md:w-1/5 sm:w-1/3'>Search</button>
                        </div>
                </form>                
            </div>
        </header>
        </>
    );
}

export default SearchBar;