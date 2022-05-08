import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';




const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('http://localhost:5000/products', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // console.log(watch("example"));
    return (
        <div className='bg-dark pb-5'>
            <div className='container text-black py-5'>

                <div className='login-form mx-auto bg-danger  rounded-3 '>
                    <form className='p-3  mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Car Name' {...register("name", { required: true })} />

                        <input placeholder='Image Url' {...register("image", { required: true })} />

                        <textarea placeholder='Description' {...register("body", { required: true, maxLength: 70 })} cols="30" rows="5" />


                        <input typeof='number' placeholder='Price' {...register("price", { required: true })} />
                        <input typeof='number' placeholder='Quantity'{...register("quantity", { required: true })} />
                        <input placeholder='Company Name' {...register("company", { required: true })} />


                        <input className='text-light btn btn-dark' type="submit" value="Add Item" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddInventory;