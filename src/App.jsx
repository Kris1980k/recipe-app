import React,{useState,useEffect} from 'react'
import SearchBar from './Components/SearchBar'
import ShowCards from './Components/ShowCards'

function App() {
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chocopollo');
  const app_id = '44a1acc9';
  const app_key = 'ba3f747fc1f4b914c8d50c7d1129d2cf';

  useEffect(() => {
    console.log("Searching for ",query)
  },[query]);

  function updateSearch(e){
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const getRecipesFunction = async () => {
    const response = await fetch( `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
    const data = await response.json();
  };

  function updateItems (e){
    e.preventDefault();
    setQuery(search);
    setSearch('');       
  }
  return (
    <>
      <SearchBar search={search} updateSearch={updateSearch} updateItems={updateItems}/>
      <ShowCards />
    </>
  );
}

export default App;