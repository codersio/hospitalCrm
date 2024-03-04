import { Link } from "@inertiajs/react"
import { useState } from "react"
import { CiSearch } from "react-icons/ci";
export default function Header() {

  const [show, Setshow] = useState(true)

  const handleShow = () => {
    Setshow(!show)
  }

  return (
    <>
      <div className="containers  bg-gray-800 w-full p-2 px-4">
        <div className="flex justify-end space-x-8">

          <div className="flex items-center border border-gray-500 rounded-full ">
            <input type="text" placeholder="Search By Patient Name" className="outline-none border-none px-1 flex-grow bg-transparent" />
            <button className=" text-white px-4 py-1 rounded-md">
              <CiSearch />
            </button>
          </div>

          <div className=" text-white grid place-items-center rounded-md">
            <i className="fa-regular fa-bell" />
          </div>

          <div className="relative">
            <div className="grid place-items-center mt-[0.15rem]">
              <button onClick={handleShow} className=" rounded-full w-9 overflow-hidden" id="toggleButton">
                <img src="https://demo.smart-hospital.in/uploads/staff_images/14.jpg?1709273729" cl alt="" />
              </button>
            </div>
            <div className={show ? "absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden" : "absolute right-0 mt-2 w-48 bg-white border z-20 border-gray-300 rounded-md shadow-lg block"} id="content">
              <h1 className="block px-4 py-2 text-gray-800 hover:bg-gray-200 capitalize font-bold">
                {/* {{Auth::guard()}} */}
              </h1>

              <Link href="/admin/destroy" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">logged Out</Link>
            </div>
          </div>
        </div></div>
    </>
  )

}