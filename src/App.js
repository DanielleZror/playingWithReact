import React from 'react';
import CardsList from './CardsList'
import {robots} from './robots'

function App() {

 
  return (
    <div>
   {/* <Card robot={robots[0]}/> */}
        <CardsList allRobots ={robots} />
    </div>
  );
}

export default App;
