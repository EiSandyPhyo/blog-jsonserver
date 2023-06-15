import React from "react";
import { Link } from "react-router-dom";
import { useDeleteBlogMutation } from "../redux/blogApi";

const BlogCard = ({ blog }) => {
  const [deleteBlog] = useDeleteBlogMutation();
  return (
    <div className="">
      <div className="flex flex-col w-72 shadow p-5 gap-3">
        <img src={blog?.img} className="w-[400px]" alt="" />
        <div className="flex flex-col gap-3">
          <h1 className="">{blog?.title}</h1>
          <p className="">{blog?.desc}</p>
          <div className="flex gap-4">
            <Link to={`/detail/${blog?.id}`}>
              <button className="px-4 py-1 bg-gray-800 text-white">
                Detail
              </button>
            </Link>
            <button onClick={()=> deleteBlog(blog?.id)} className="px-4 py-1 bg-red-800 text-white">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
