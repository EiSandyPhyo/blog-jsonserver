import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import { useEditBlogMutation, useGetDetailBlogQuery } from "../redux/blogApi";
import Alert from "@mui/material/Alert";
import '../../node_modules/animate.css';
import Swal from "sweetalert2";
/* import withReactContent from 'sweetalert2-react-content'; */

const Edit = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [swal, setSwal] = useState(false);
// const swal = true;

  const { id } = useParams();
  const { data: blog } = useGetDetailBlogQuery(id);
  console.log(id);

  const navigate = useNavigate();
  const nav = useNavigate();

  const [editBlog] = useEditBlogMutation();

  useEffect(() => {
    setTitle(blog?.title);
    setDesc(blog?.desc);
    setImg(blog?.img);
  }, [blog]);

  const editHandler = (e) => {
    e.preventDefault();
    const newData = { id, title, desc, img };
    editBlog(newData);
    setTimeout(() => {
        nav("/");
      }, "2000");
  }

  const swalHandler = () => {
    setSwal(true);
    // Swal.fire("Good job!", `You Edited ${id}`, "success");
  }

  return (
    <>
      <div className="flex flex-wrap w-[30rem] justify-center mx-auto items-center mt-3">
       {swal ?  <Alert severity="success" className="animate__animated animate__bounceInDown">"Good job!", You Edited Successfully - check it out!</Alert> : " "} 
      </div>
      <div className="flex flex-wrap justify-center items-center h-screen">
        <div className="flex flex-col w-[25rem]">
          <div onClick={() => navigate(-1)} className=" cursor-pointer">
            <h2 className=" w-20 mx-auto mb-4 text-gray-800">
              <IoReturnUpBack size={40} />
            </h2>
          </div>

          <form
            action=""
            onSubmit={editHandler}
            className="flex flex-col w-96 shadow-lg gap-10 p-7"
          >
            <h2 className=" text-2xl text-gray-600 font-medium">Edit Blog</h2>
            <input
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title..."
              className=" border-b border-b-gray-800 outline-none"
            />
            <input
              defaultValue={desc}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              placeholder="Description..."
              className=" border-b border-b-gray-800 outline-none"
            />
            <input
              defaultValue={img}
              onChange={(e) => setImg(e.target.value)}
              type="text"
              placeholder="Image..."
              className=" border-b border-b-gray-800 outline-none"
            />
            <button onClick={swalHandler}
              type="submit"
              className=" px-7 py-1 bg-gray-800 text-white"
            >
              Done 
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
