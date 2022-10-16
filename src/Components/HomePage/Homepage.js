import React, { useState, useCallback, useContext, useEffect } from 'react'
import './Homepage.scss'
import { myContext } from '../Context/Context';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchHomePageMeals, meals } = useContext(myContext)

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm)
  }, [searchTerm, fetchHomePageMeals]);


  useEffect(() => {
    fetchMealsHandler()
  }, [])
  
  return (
    <div className='footer-bottom home'>
      <div className='home-search'>
        <input type='text' placeholder='Enter meal name...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button className='homepage-button' onClick={() => fetchMealsHandler()}>Search Meal</button>
      </div>
      <h2 className='meals-heading'>Latest Meals</h2>
      <div className='home-meals-grid'>
        {meals ? (
          meals.map((meal) => (
            <div className='home-meal' key={meal.idMeal}>
              <img className='homepage-img' src={meal.strMealThumb} alt="Meals" />
              <h4>{meal.strMeal}</h4>
            </div>
          ))
        ) : (
          <h2>No Meals found! Try another word...</h2>
        )
        }
      </div>
    </div>
  )
}

export default Homepage