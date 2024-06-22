import React,{useState,useEffect} from 'react'
import SearchBar from './Components/SearchBar'

function App() {
  const [search,setSearch] = useState('');

  function updateSearch(e){
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <SearchBar search={search} updateSearch={updateSearch} />
    </>
  );
}

export default App;