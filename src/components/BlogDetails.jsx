import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className=' mt-[20px]'>
      <NavLink to={`/blog/${post.id}`} >
        <span className='font-semibold text-lg'>{post.title}</span>
      </NavLink>

      <p className='text-[15px] my-[2px]'>
        By {" "}
        <span className='italic'>{post.author}</span>
        {" "} on {" "}

        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='underline font-semibold '>{post.category}</span>
        </NavLink>
      </p>

      <p className='text-[15px] my-[2px]'> Posted on {post.date} </p>

      <p className='text-[15px] my-[4px]'> {post.content}</p>

      <div className='flex gap-x-2 flex-wrap justify-start'>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='text-blue-500 font-bold'>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
