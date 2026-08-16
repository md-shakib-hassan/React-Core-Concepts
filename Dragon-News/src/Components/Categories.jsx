import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/Categories.json')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>All category length: {categories.length}</h1>
      <div className='grid grid-cols-1 gap-y-2 mt-2'>
        {
          categories.map(element => <NavLink className="btn border-0 bg-white" key={element.id} to={`/categories/${element.id}`} >{element.name}</NavLink>)
        }
      </div>
    </div>
  );
};

export default Categories;