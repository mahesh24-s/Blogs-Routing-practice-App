import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
  return (
    <div>
        <Header/>
        <div className='max-w-xl mx-auto mt-[75px] mb-[-50px]'>
            <button className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => navigation(-1)}
            >
                back
            </button>
            <h2 className='font-semibold'>
                Blogs Tagged <span className='text-xl font-semibold'>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
      
    </div>
  )
}

export default TagPage
