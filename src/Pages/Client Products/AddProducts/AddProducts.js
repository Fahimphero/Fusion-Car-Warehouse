import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)


        axios.post('https://pure-harbor-50785.herokuapp.com/clientproducts', data)
            .then(function (response) {
                console.log(response);
                toast('Product Added Successfully')
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
                        {/* <input defaultValue={user?.displayName} placeholder='User Name' {...register("user", { required: true })} readOnly /> */}



                        <input defaultValue={user?.email} placeholder='User Email' {...register("email", { required: true })} readOnly />

                        <input placeholder='Car Name' {...register("Car Name", { required: true })} />

                        <input placeholder='Image Url' {...register("image", { required: true })} />

                        <textarea placeholder='Description' {...register("body", { required: true, maxLength: 70 })} cols="30" rows="5" />


                        <input typeof='number' placeholder='Price' {...register("price", { required: true })} />
                        <input typeof='number' placeholder='Quantity'{...register("quantity", { required: true })} />
                        <input placeholder='Company Name' {...register("company", { required: true })} />


                        <input className='text-light btn btn-dark' type="submit" value="Add Item" />
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddProducts;