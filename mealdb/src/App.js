import React, { useState } from 'react';
import "./App.css"

function App() {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);

  const searchMeals = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    setMeals(data.meals);
    setQuery('');
  }
  let instructions = meals.strInstructions;
  // instructions = instructions?.filter(instruction => instruction.length > 1);
  console.log(instructions);
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 ">
      <form onSubmit={searchMeals} className="flex justify-center items-center mt-8">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search meals..." className="border border-gray-500 rounded-l py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-r py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">Search</button>
      </form>
      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2">
        {meals && meals.map((meal) => (
          <div key={meal.idMeal} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{meal.strMeal}</h2>
              {/* <p className="text-gray-600 text-base mb-4">{console.log(meal.strInstructions)}</p> */}
              <div className='instructions my-4'>
                <h6 className='fs-16'>Instructions:</h6>
                {meal.strInstructions && (
                  <ul className="list-disc pl-6 mb-4">
                    {meal.strInstructions.split('\r\n').map((step) => (
                      <li key={step} className="text-gray-600 text-base mb-2">{step}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className='my-5 py-3'>
                <h6 className='mt-2'>Ingredients:</h6>
                <ul className='flex-auto'>
                  {Object.keys(meal).map((key) => {
                    if (key.includes('Ingredient') && meal[key]) {
                      return <li key={key} className="text-gray-600 text-sm mb-2">{meal[key]}</li>
                    }
                    return null;
                  })}
                </ul>
              </div>
              <p className="text-gray-600 text-base mt-4">Origin: {meal.strArea}</p>
              <div className='flex' align-center>
                <span className='text-base'>Source: </span>
                <a href={meal.strYoutube}>{meal.strYoutube}</a>
              </div>
              {/* <p className="text-gray-600 text-base mt-4">Source: {meal.strYoutube}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
