import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
// import Checkbox from '@/Components/Checkbox';

// import { Head, Link, useForm } from '@inertiajs/react';
import { Head, Link, useForm } from '@inertiajs/react';
import { RiAdminLine } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import { FaUserDoctor } from "react-icons/fa6";
import { MdLocalPharmacy } from "react-icons/md";
import { FaXRay } from "react-icons/fa6";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";
import InputLabel from '@/components/InputLabel';
import TextInput from '@/components/TextInput';
const Login = ({ status, canResetPassword }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
});

useEffect(() => {
    return () => {
        reset('password');
    };
}, []);

const submit = (e) => {
    e.preventDefault();

    post(route('admin-login'));
};
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const handleLogin = async () => {

  // //   axios.post('/api/login',{
  // //       email,
  // //       password
  // //   })
  // // .then(res=>console.log(res))
    
  //   try {
  //     const response = await axios.post('/api/login', {
  //       email,
  //       password,
  //     });
  //     const data = response.data;
  //     // Handle successful login
  //     localStorage.setItem('access_token',data.access_token);
  //     localStorage.setItem('refresh_token', data.refresh_token);
  //     // Redirect or handle successful login
  //   //   post(route('test'));
  //   } catch (error) {
  //     // Handle login failure
  //     console.error('Login failed:', error.response.data.message);
  //   }
  // };

  return (
  <div className='grid place-items-center w-full h-screen'>
    <div className='card border w-[100%] md:w-[60%] lg:w-[30%] bg-[#3399FF] rounded-md px-3'>

    <div className="card-header p-3 py-6">
    <h1 className="text-white text-[1.5rem]">Logo</h1>

    </div>
    <hr />
    <div className="card-body p-3 space-y-4 py-3">
    <h2 className='text-white text-[1.5rem]'>Admin Login</h2>
     <div className="form-group">
     <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    {/* <InputError message={errors.email} className="mt-2" /> */}
     </div>
     {/* <br /> */}
     <div className="form-group">
     {/* <InputLabel htmlFor="password" value="Password" /> */}

<TextInput
    id="password"
    type="password"
    name="password"
    value={data.password}
    className="mt-1 block w-full"
    autoComplete="current-password"
    onChange={(e) => setData('password', e.target.value)}
/>

{/* <InputError message={errors.password} className="mt-2" /> */}
     </div>
     
     <input type="button" onClick={submit} className='w-full rounded-md bg-[#FF9800] p-2 text-white' value="Sign In"/>
      {/* <button >Login</button> */}
    </div>

    <div className="card-footer p-3">
        <div className="grid grid-cols-3 gap-3">
            <div className='bg-blue-500 grid place-items-center p-2 text-white rounded-md'>
            <div className='flex space-x-2'>
            <div className='grid place-items-center'>
            <RiAdminLine />
            </div>
             <span>
             Super Admin
             </span>
            </div>
            </div>
            <div className='bg-blue-500 grid place-items-center p-2 text-white rounded-md'>
            <div className='flex space-x-2'>
            <div className='grid place-items-center'>
            <GrUserAdmin />
            </div>
             <span>
              Admin
             </span>
            </div>
            </div>
            <div className='bg-blue-500 grid place-items-center p-2 text-white rounded-md'>
            <div className='flex space-x-2'>
            <div className='grid place-items-center'>
            <FaUserDoctor  />
            </div>
             <span>
             Doctor
             </span>
            </div>
             
            </div>
            <div className='bg-blue-500 grid place-items-center p-2 text-white rounded-md'>
           
            <div className='flex space-x-2'>
            <div className='grid place-items-center'>
            <MdLocalPharmacy   />
            </div>
             <span>
             Pharmacy
             </span>
            </div>
            
            </div> 
            <div className='bg-blue-500 grid place-items-center p-2 text-white rounded-md'>
           
            <div className='flex space-x-2'>
            <div className='grid place-items-center'>
            <MdLocalPharmacy   />
            </div>
             <span>
             Pathology
             </span>
            </div>
            
            </div>
             <div className='bg-blue-500 grid place-items-center p-2 text-white rounded-md'>
           
             <div className='flex space-x-2'>
            <div className='grid place-items-center'>
            <MdLocalPharmacy   />
            </div>
             <span>
             Radiologist
             </span>
            </div>
            
            </div>
             <div className='bg-blue-500 grid place-items-center p-2 text-white rounded-md'>
           
           
             <div className='flex space-x-2'>
            <div className='grid place-items-center'>
            <MdOutlineSwitchAccount    />
            </div>
             <span>
             Accounttent
             </span>
            </div>
            
            </div>
            <div className='bg-blue-500 grid place-items-center p-2 text-white rounded-md'>
            
            <div className='flex space-x-2'>
            <div className='grid place-items-center'>
            <MdOutlineSwitchAccount    />
            </div>
             <span>
             Reception
             </span>
            </div>
            
            </div>  
             <div className='bg-blue-500 grid place-items-center p-2 text-white rounded-md'>
             
             <div className='flex space-x-2'>
            <div className='grid place-items-center'>
            <MdOutlineSwitchAccount    />
            </div>
             <span>
             Nurse
             </span>
            </div>
            
            </div>
        </div>
    </div>
    </div>

  </div>
  );
};

export default Login;
