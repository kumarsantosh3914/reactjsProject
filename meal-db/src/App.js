import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  const inputBox = document.getElementById('search');
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
    console.log("RESPONSE", data.meals);
    console.log("Hello")

    const details = data.meals;
    // setDetails(details);
  }


  useEffect(() => {
    fetchDetails();
  }, []);


  let data;
  const getData = async (event) => {
    event.preventDefault();

    if (!inputBox.value) {
      alert("Please Enter City Name");
      return;
    }

    const inputValue = inputBox.value;
    const fetchData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=inputValue`);

    const mealData = await fetchData.json();
    data = mealData;
    console.log("fetch")
    console.log(data);
  }

  return (
    <>
      <from className="search" onsubmit="getData(event)">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Enter Meal Name"
          onfocus="this.placeholder=''"
          onblue="this.placeholder = 'Enter Meal Name'"
        />
        <button type="submit" className="search-btn">Search</button>
      </from>
      <Card details={details} />
    </>
  );
}

export default App;
