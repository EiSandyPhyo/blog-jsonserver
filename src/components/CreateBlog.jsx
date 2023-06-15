import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useCreateBlogMutation } from "../redux/blogApi";
import Alert from "@mui/material/Alert";
import "../../node_modules/animate.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [swal, setSwal] = useState(false);

  const [createBlog, { isLoading }] = useCreateBlogMutation();

  const nav = useNavigate();

  const createBlogHandler = (e) => {
    e.preventDefault();
    const blog = { id: Date.now(), title, desc, img };
    createBlog(blog);
    setTimeout(() => {
      nav("/");
    }, "2000");
    console.log(blog);
  };

  const swalHandler = () => {
    setSwal(true);
  };

  return (
    <>
      <div className="flex flex-wrap w-[30rem] justify-center mx-auto items-center mt-3">
        {swal ? (
          <Alert
            severity="success"
            className="animate__animated animate__bounceInDown"
          >
            "Good job!", You Created Successfully - check it out!
          </Alert>
        ) : (
          " "
        )}
      </div>

      <div className="flex flex-wrap justify-center items-center h-screen">
        <div className="flex flex-col w-[25rem]">
          <Link to={"/"}>
            <h2 className=" w-20 mx-auto mb-4 text-gray-800">
              {" "}
              <FaHome size={40} />
            </h2>
          </Link>
          <form
            action=""
            onSubmit={createBlogHandler}
            className="flex flex-col w-96 shadow-lg gap-10 p-7"
          >
            <h2 className=" text-2xl text-gray-600 font-medium">Create Blog</h2>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text" required
              placeholder="Title..."
              className=" border-b border-b-gray-800 outline-none"
            />
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              type="text" required
              placeholder="Description..."
              className=" border-b border-b-gray-800 outline-none"
            />
            <input
              value={img}
              onChange={(e) => setImg(e.target.value)}
              type="text" required
              placeholder="Image..."
              className=" border-b border-b-gray-800 outline-none"
            />
            <button onClick={swalHandler} type="submit" className=" px-7 py-1 bg-gray-800 text-white">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
