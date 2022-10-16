import React, { useContext, useEffect } from 'react'
import { myContext } from '../Context/Context';
import './Randommeal.scss'

const Randommeal = () => {
  const { fetchRandomMeal, randomMeal } = useContext(myContext);
  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal])
  return (
    <div className='footer-bottom random'>
      {randomMeal.map((meal) => (
        <div key={meal.idMeal} className='random-grid'>
          <div className='random-grid-controls'>
            <img className='Instruction-img' src={meal.strMealThumb} alt="Categories" />
            <button className='Instruction-button' onClick={fetchRandomMeal}>See Another Meal</button>
          </div>
          <div className='random-grid-instructions'>
            <h4 className='Center'>Meal Instructions</h4>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default Randommeal