import React,{useState,useEffect} from 'react'
import SearchBar from './Components/SearchBar'
import ShowCards from './Components/ShowCards'

function App() {
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('Pizza');
  const [items, setItems] = useState([]);
  const app_id = '44a1acc9';
  const app_key = 'ba3f747fc1f4b914c8d50c7d1129d2cf';

  useEffect(() => {
    console.log("Searching for",query)
    getRecipesFunction()
  },[query]);

  function updateSearch(e){
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const getRecipesFunction = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`); 
    const data = await response.json();
    setItems(data.hits);
    console.log(data.hits)
  };

  function updateItems (e){
    e.preventDefault();
    setQuery(search);
    setSearch('');       
  }
  return (
    <>
      <SearchBar search={search} updateSearch={updateSearch} updateItems={updateItems}/>
      <div className='xl:h-28 lg:h-28 md:h-28 sm:h-28 h-32'></div>
      <ShowCards items={items}/>
    </>
  );
}

export default App;