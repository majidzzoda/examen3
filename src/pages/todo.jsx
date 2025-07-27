import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Api, ApiComplete, ApiImages } from '../config/api';
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';

const Todo = () => {
    const [data, setData] = useState([]);
    const [addModal, setAddModal] = useState(false);
    let deleteBtn = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>;
    let editBtn = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>;
    let checkBtn = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>;
    let infoBtn = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
    </svg>
    let addImgBtn = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    async function get() {
        try {
            const { data } = await axios.get(Api);
            setData(data.data);
        } catch (error) {
            console.error(error);
        }
    }
    async function delUser(id) {
        try {
            await axios.delete(`${Api}?id=${id}`);
            get();
        } catch (error) {
            console.error(error);
        }
    }
    async function checkUser(e) {
        let obj = {
            ...e,
            isCompleted: !e.isCompleted
        }
        try {
            await axios.put(`${ApiComplete}?id=${e.id}`, obj)
            get();
        } catch (error) {
            console.error(error);
        }
    }
    const formik = useFormik({
        initialValues: {
            Images: "",
            Name: "",
            Description: ""
        },
        onSubmit: async (values, { resetForm }) => {
            const formData = new FormData();
            formData.append("name", values.Name);
            formData.append("description", values.Description);
            formData.append("images", values.Images);
            try {
                await axios.post(Api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                get();
                resetForm();
                setAddModal(false);
            } catch (error) {
                console.error(error);
            }
        }
    })
    const handleChangeFile = (event) => {
        formik.setFieldValue("Images", event.target.files[0])
    }
    useEffect(() => {
        get()
    }, [])
    return (
        <main className='lg:py-[150px] py-[100px] transition-all dark:text-white duration-500 dark:bg-gray-950 bg-gray-200 px-[20px] lg:px-[75px]'>
            {addModal && (
                <div
                    className='fixed inset-0 bg-black/30 flex items-center justify-center backdrop-blur-[5px]'>
                    <form className='flex flex-col gap-[5px] w-[85%] transition-all duration-500 dark:bg-gray-900 bg-gray-200 p-[20px] rounded-[12px]' onSubmit={formik.handleSubmit} action="">
                        <input
                            type="text"
                            value={formik.values.Name}
                            name='Name'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="Name"
                            className='bg-white dark:bg-gray-950 transition-all duration-500 dark:border-gray-900 border border-gray-200 p-[5px] rounded-[5px]'

                        />
                        <input
                            type="text"
                            value={formik.values.Description}
                            name='Description'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            className='bg-white dark:bg-gray-950 transition-all duration-500 dark:border-gray-900 border border-gray-200 p-[5px] rounded-[5px]'
                            placeholder="Description"

                        />
                        <input type="file" name='Images'
                            className='bg-white dark:bg-gray-950 transition-all duration-500 dark:border-gray-900 border border-gray-200 p-[5px] rounded-[5px]'
                            onChange={handleChangeFile} />
                        <button className='bg-blue-500 border text-white dark:border-gray-900 transition-all duration-500 border-gray-200 p-[5px] rounded-[5px]'
                            type="submit">Add</button>
                    </form>
                </div>
            )}
            <button onClick={() => setAddModal(true)}>{addImgBtn}</button>
            <h1 className='text-center lg:text-[40px] font-[700] mb-[25px]'>Users: {data.length}</h1>
            <div className='flex items-center justify-between flex-wrap gap-[30px] flex-col lg:flex-row'>
                {data.map((e) => {
                    return (
                        <div className='flex flex-col gap-[10px] items-center justify-center'>
                            <article className='bg-gray-100 dark:bg-gray-900 dark:text-white transition-all duration-500 shadow-2xl w-[280px] lg:w-[300px] flex flex-col items-center justify-between p-[20px] rounded-[12px]' >
                                <h1>Name: {e.name}</h1>
                                <h1 className={e.isCompleted ? 'text-green-500' : 'text-red-500'}>{e.isCompleted ? "Active" : "Inactive"}</h1>
                            </article>
                            <div className='items-center flex bg-gray-100 transition-all duration-500 dark:bg-gray-900 py-[10px] px-[20px] gap-[10px] rounded-[12px] justify-between'>
                                <button onClick={() => delUser(e.id)}>{deleteBtn}</button>
                                <button onClick={() => checkUser(e)}>{checkBtn}</button>
                                <Link className='mt-[5px]' to={`/userById/${e.id}`}>
                                    <button>{infoBtn}</button>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default Todo