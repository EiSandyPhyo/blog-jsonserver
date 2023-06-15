import React from "react";
import { useGetBlogsQuery } from "../redux/blogApi";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const Blog = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery();
  console.log(blogs);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className=" text-3xl">Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-wrap justify-center my-5">
        <Link to={`/create`}>
          <button className="px-6 py-2 bg-gray-800 text-white text-3xl w-96 fixed top-0 left-0 right-0 mx-auto mt-5">
            Create Blog
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-20">
        {blogs?.map((blog) => {
          return <BlogCard key={blog?.id} blog={blog} />;
        })}
      </div>
    </>
  );
};

export default Blog;
