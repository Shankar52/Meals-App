import React, { useEffect, useContext } from 'react'
import { myContext } from '../Context/Context'
import './Categories.scss'

const Categories = () => {
  const { fetchCategories, categories } = useContext(myContext);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories])
  return (
    <div>
      <h1 className='categories-heading'>Available Meals Categories</h1>
      <div className='footer-bottom categories'>
        {categories.map((category) => (
          <div key={category.idCategory}>
            <img className='category-img' src={category.strCategoryThumb} alt="Categories" />
            <h4>{category.strCategory}</h4>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Categories