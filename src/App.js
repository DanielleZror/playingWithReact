import React, { useState } from 'react';
import CardsList from './CardsList'
import SearchBox from './SearchBox'
import {robots} from './robots'

function App() {
  
  const [searchField, setSearchField] = useState('');

  const filteredRobot = robots.filter((robot) =>{
    return (robot.name.toLowerCase().includes(searchField.toLowerCase()))
  })

  const OnChangeSearch = (searchValue) => {
    console.log(searchValue.target.value)
    setSearchField(searchValue.target.value)
  }

  
  return (
    <div>
        <h1>my list</h1>
        <SearchBox onChange = {OnChangeSearch}/>
        <CardsList robots ={filteredRobot} />
    </div>
  );
}

export default App;
