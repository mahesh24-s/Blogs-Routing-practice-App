import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header/>
      <div className='max-w-xl mx-auto mt-[75px] mb-[-60px]'>
        <button className="border-2 border-gray-300 py-1 px-4 rounded-md"
        onClick={() => navigation(-1)}
        >
          Back
        </button>
        <h2 className='font-[500] '> 
            Blogs on <span className='text-xl font-semibold'>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
