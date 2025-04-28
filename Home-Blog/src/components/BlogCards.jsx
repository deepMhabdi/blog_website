import React from 'react'
import Blogs from './blogsData.json'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const BlogCards = () => {

  return (

    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 px-4' >
     
    {
        Blogs.map ((blog) =><Link key={blog.id} className='p-3 cursor-pointer rounded-xl'>
            <div>
               <img src={blog.image} alt="" className=' h-100 w-full rounded-t-2xl object-cover'/>
            </div>
            <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>
              {blog.title}
            </h3>
            <p className='mb-4  text-gray-400'><FaUser className='inline-flex items-center mr-2' />{blog.author}</p>
            <p className='text-sm text-gray-500'>Published : {blog.published_date}</p>
        </Link>)
     }

    </div>
   
  )
}

export default BlogCards
