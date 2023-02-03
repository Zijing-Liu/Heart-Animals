import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";
function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  //[count, setCount]: Array destructuring. fancy way to get access to the piece of state
  //count is the piece of state, setCount is the setter function used to update the piece of state
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    //create a new arry with the previosu animal and a new randomly generated animal
    // using push modifies a piece of state
    // animals.push(getRandomAnimal());
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    //transfom a string to an animal instance
    return <AnimalShow type={animal} key={index} />;
  });

  // 0 is the default state of data
  // to modify the count value,
  // NEVER GOING TO DO count=1223, instead, do setCount(123)

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}
export default App;

//steps to use events
//https://reactjs.org/docs/events.html
//1. decide what kind of event you want to watch for
//2. Create a function
//3. Name the function using the pattern of handle+EventNeme
//4. Pass the function as a prop to a plain element
//5. Make sure you pass the function using a valid event name
//6. Make sure you pass a reference to the dunction, don't call it

//callback function call be define inline
