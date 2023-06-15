import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetDetailBlogQuery } from "../redux/blogApi";
import {FaHome} from 'react-icons/fa'

const Detail = () => {
  const { id } = useParams();
  const { data: blog } = useGetDetailBlogQuery(id);
  console.log(blog);
  return (
    <div className="">
        
        <div className="flex flex-wrap justify-center items-center h-screen shadow p-5">
        <div className="flex flex-col w-72">
        <Link to={'/'}>
        <h2 className=" w-20 mx-auto mb-4 text-gray-800"> <FaHome size={40}/></h2>
        </Link>
       
        <div className="flex flex-col w-72 shadow p-5 gap-3">
          <img src={blog?.img} className="w-[400px]" alt="" />
          <div className="flex flex-col gap-3">
            <h1 className="">{blog?.title}</h1>
            <p className="">{blog?.desc}</p>
            <Link to={`/edit/${blog?.id}`}>
              <button className="px-4 py-1 bg-gray-800 text-white">
                Edit
              </button>
            </Link>
          </div>
        </div>
         </div>
      </div>
    </div>
      
  );
};

export default Detail;
