import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState } from 'react'
import { FaStethoscope, FaFlask } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa6";
import { MdOutlineBloodtype, MdBloodtype } from "react-icons/md";

const BillingPage = () => {

  const [modal, setModal] = useState(true)

  const handleClose = () => {
    // console.log('hello')
    setModal(!modal)
  }
  return (

    <div className="flex h-screen">

      <div className="bg-gray-800 text-white w-[11%] flex-shrink-0">

        <Sidebar />
      </div>


      <div className="flex-grow bg-gray-100 ">
        <Header />
        <div className=" grid grid-cols-2 p-4 gap-3">

          <div className="card border ">
            <div className="card-header p-2 border-b">
              <h1 className='text-[20px] text-[#333333]'>Single Module Billing</h1>

            </div>

            <div className="card-body grid grid-cols-3 p-4 gap-3">
              <div className="item hover:bg-blue-500 hover:text-white p-[5rem] grid place-items-center border">
                <div className="space-y-3">
                  <div className="icon grid place-items-center text-[2rem]">
                    <FaStethoscope /></div>
                  <h1>OPD</h1>
                </div>
              </div>
              <div className="item hover:bg-blue-500 hover:text-white p-[5rem] grid place-items-center border">
                <div className="space-y-3">
                  <div className="icon grid place-items-center text-[2rem]">
                    <FaFlask /></div>
                  <h1>Pathology</h1>
                </div>
              </div>
              <div className="item hover:bg-blue-500 hover:text-white p-[5rem] grid place-items-center border">
                <div className="space-y-3">
                  <div className="icon grid place-items-center text-[2rem]">
                    <FaMicroscope /></div>
                  <h1>Radiology</h1>
                </div>
              </div>
              <div className="item hover:bg-blue-500 hover:text-white p-[5rem] grid place-items-center border">
                <div className="space-y-3">
                  <div className="icon grid place-items-center text-[2rem]">
                    <MdOutlineBloodtype /></div>
                  <h1>Blood issue</h1>
                </div>
              </div>
              <div className="item hover:bg-blue-500 hover:text-white p-[5rem] grid place-items-center border">
                <div className="space-y-3">
                  <div className="icon grid place-items-center text-[2rem]">
                    <MdBloodtype /></div>
                  <h1 className='text-center'>Blood Component issue </h1>
                </div>
              </div>
            </div>

          </div>


          <div className="card border ">
            <div className="card-header p-2 border-b">
              <h1 className='text-[20px] text-[#333333]'>OPD/IPD Billing Through Case Id</h1>

            </div>

            <div className="card-body  p-4 ">

              <form className="flex items-center max-w-lg mx-auto">
                <label for="voice-search" class="sr-only">Search</label>
                <div class="relative w-full">

                  <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Case ID..." required />

                </div>
                <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-[#012E48] rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>Search
                </button>
              </form>

            </div>

          </div>

        </div>
      </div>
    </div>

  );
}

export default BillingPage;