import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Api, ApiAddImg, ApiDelImg, ApiImages } from '../config/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useFormik } from 'formik';


const UserById = () => {
  let deleteBtn = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>;
  let addImgBtn = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
  const [data, setData] = useState(null);
  const { id } = useParams()
  async function get() {
    try {
      const { data } = await axios.get(`${Api}/${id}`);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function delImage(id) {
    try {
      await axios.delete(`${ApiDelImg}/${id}`);
      get();
    } catch (error) {
      console.error(error);
    }
  }
  const formik = useFormik({
    initialValues: {
      Images: ""
    },
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("images", values.Images);
      formData.append("userId", id);

      try {
        await axios.post(`${ApiAddImg}/${id}/images`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        get();
        resetForm();
      } catch (error) {
        console.error(error);
      }
    }
  });

  const handleChangeFile = (event) => {
    formik.setFieldValue("Images", event.target.files[0]);
  }

  useEffect(() => {
    get()
  }, [])
  return (
    <main className='lg:py-[150px] bg-gray-200 px-[20px] dark:bg-gray-950 transition-all duration-500 py-[50px]'>
      {data && (
        <article className='bg-gray-100 dark:bg-gray-900 dark:text-white transition-all duration-500 text-black flex items-center mt-[75px] flex-col text-center lg:w-[700px] rounded-[20px] p-[10px] m-auto w-[100%] justify-evenly shadow-2xl'>
          <aside className='flex flex-col gap-[10px]'>
            <h1 className='font-bold text-[30px] lg:text-[40px]'>{data.name}</h1>
            <h1 className='text-[14px]'>{data.description}</h1>
            <h1 className={data.isCompleted ? 'text-green-500' : 'text-red-500'}>{data.isCompleted ? "Active" : "Inactive"}</h1>
          </aside>
          <aside>
            <Swiper modules={[Navigation]} navigation spaceBetween={20} slidesPerView={1} className="w-[300px]">
              {data.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="lg:h-[200px] rounded-[15px] lg:rounded-[30px] m-auto lg:w-full h-[200px] object-cover"
                    src={`${ApiImages}/${image.imageName}`}
                    alt=""
                  />
                  <button onClick={() => delImage(image.id)} className='bg-gray-200 shadow-2xl cursor-pointer mt-[10px] p-[10px] rounded-[8px]'>{deleteBtn}</button>
                </SwiperSlide>
              ))}
              <form onSubmit={formik.handleSubmit} className="">
                <input type="file" name="Images" onChange={handleChangeFile} className="bg-white dark:bg-gray-950 transition-all duration-500 dark:border-gray-900 w-[270px] border border-gray-200 p-[5px] rounded-[5px]" />
                <button type="submit" className="bg-blue-100 hover:bg-blue-200 p-[10px] rounded-[8px] transition">  {addImgBtn}  </button>
              </form>
            </Swiper>
          </aside>
        </article>
      )}
    </main>
  )
}

export default UserById