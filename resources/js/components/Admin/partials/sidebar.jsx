import { Link } from "@inertiajs/react";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdSwitchAccount } from "react-icons/md";
import { FaCalendarAlt, FaAmbulance } from "react-icons/fa";
import { TbStethoscope } from "react-icons/tb";
import { FaProcedures, FaUsers } from "react-icons/fa";
import { MdLocalPharmacy, MdBloodtype } from "react-icons/md";
import { RiFlaskFill } from "react-icons/ri";
import { FaMicroscope, FaSitemap } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { CiMoneyBill } from "react-icons/ci";


export default function Sidebar() {

  const [show, Setshow] = useState(false)
  const [financeshow, SetFinanceshow] = useState(false)
  const HandleShow = () => {
    Setshow(!show)
  }
  const HandleFinanceShow = () => {
    SetFinanceshow(!financeshow)
  }
  return (
    <>
      <div className="bg-gray-800 text-white  flex-shrink-0">
        <div className="p-4 ">
          <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
          <ul className=" text-[15px] space-y-7 mt-9">
            <li>
              <Link href="/admin/dashboard" className="space-x-2">
                <div className="flex space-x-2">
                  <div className="icon grid place-items-center">
                    <AiOutlineDashboard />
                  </div>
                  <span>Dashboard</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/billing" className="space-x-2">
                <div className="flex space-x-2">
                  <div className="icon grid place-items-center">
                    <MdSwitchAccount />
                  </div>
                  <span> Billing</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/appoinment" className="space-x-2">
                <div className="flex space-x-2">
                  <div className="icon grid place-items-center">
                    <FaCalendarAlt />
                  </div>
                  <span>Appointment</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/opd-patients" className="space-x-2">
                <div className="flex space-x-2">
                  <div className="icon grid place-items-center">
                    <TbStethoscope />
                  </div>
                  <span> OPD -Out Patient</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/ipd-patients" className="space-x-2">
                <div className="flex space-x-2">
                  <div className="icon grid place-items-center">
                    <FaProcedures />
                  </div>
                  <span> IPD - In Patient</span>
                </div>
              </Link>
            </li>
            <li className="treeview ">
              <Link href="/admin/pharmacy" className="flex space-x-2">
                <div className="icon grid place-items-center">
                  <MdLocalPharmacy />
                </div>
                <span> Pharmacy</span>
              </Link>
            </li>
            <li className="treeview ">
              <Link href="/admin/pathology" className="flex space-x-2">
                <div className="icon grid place-items-center">
                  <RiFlaskFill />
                </div>
                <span> Pathology</span>
              </Link>
            </li>
            <li className="treeview ">
              <Link href="/admin/radiology" className="flex space-x-2">
                <div className="icon grid place-items-center">
                  <FaMicroscope />
                </div>
                <span> Radiology</span>
              </Link>
            </li>

            <li className="treeview ">
              <Link href="/admin/blood/blood-bank" className="flex space-x-2">
                <div className="icon grid place-items-center">
                  <MdBloodtype />
                </div>
                <span> Blood Bank</span>
              </Link>
            </li>
            <li className="treeview ">
              <Link href="/admin/ambulance" className="flex space-x-2">
                <div className="icon grid place-items-center">
                  <FaAmbulance />
                </div>
                <span> Ambulance</span>
              </Link>
            </li>

            <li className="treeview ">
              <Link href="/admin/front-office" className="flex space-x-2">
                <div className="icon grid place-items-center">
                  <HiOutlineBuildingOffice2 />
                </div>
                <span> Front Office</span>
              </Link>
            </li>
            <li className="treeview ">

              <div onClick={HandleShow} className="flex space-x-2 cursor-pointer">
                <div className="icon grid place-items-center">
                  <HiOutlineBuildingOffice2 />
                </div>
                <span> Birth & Death Record</span>
                <div className="icon grid place-items-center">
                  {show ? <FaAngleDown /> : <FaAngleRight />}

                </div>
              </div>

              <li className={show ? "block mt-4 space-y-3 " : "hidden"}>
                <li className="space-y-3">
                  <Link href="/admin/birth-record" className="flex space-x-2">
                    <div className="icon grid place-items-center">
                      <FaAngleRight />
                    </div>
                    <span className="text-[12px]"> Birth  Record</span>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/death-record" className="flex space-x-2">
                    <div className="icon grid place-items-center">
                      <FaAngleRight />
                    </div>
                    <span className="text-[12px]">  Death Record</span>
                  </Link>
                </li>
              </li>


            </li>

            <li className="treeview ">

              <div onClick={HandleFinanceShow} className="flex space-x-2 cursor-pointer">
                <div className="icon grid place-items-center">
                  <CiMoneyBill />
                </div>
                <span> Finance</span>
                <div className="icon grid place-items-center">
                  {financeshow ? <FaAngleDown /> : <FaAngleRight />}

                </div>
              </div>

              <li className={financeshow ? "block mt-4 space-y-3 " : "hidden"}>
                <li className="space-y-3">
                  <Link href="/admin/income" className="flex space-x-2">
                    <div className="icon grid place-items-center">
                      <FaAngleRight />
                    </div>
                    <span className="text-[12px]"> Income</span>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/expenses" className="flex space-x-2">
                    <div className="icon grid place-items-center">
                      <FaAngleRight />
                    </div>
                    <span className="text-[12px]"> Expenses</span>
                  </Link>
                </li>
              </li>


            </li>
            <li className="treeview ">
              <Link href="/admin/tpamanagement" className="flex space-x-2">
                <div className="icon grid place-items-center">
                  <FaAmbulance />
                </div>
                <span> TPA Management</span>
              </Link>
            </li>
            <li className="treeview ">
              <Link href="/admin/human-resource" className="flex space-x-2">
                <div className="icon grid place-items-center">
                  <FaSitemap />
                </div>
                <span> Human Resource</span>
              </Link>
            </li>
            <li className="treeview ">
              <Link href="/admin/referral" className="flex space-x-2">
                <div className="icon grid place-items-center">
                  <FaUsers />
                </div>
                <span> Refferral</span>
              </Link>
            </li>
            <li className="treeview ">
              <Link href="/admin/inventory/item-stock" className="flex space-x-2">
                <div className="icon grid place-items-center">
                  <FaUsers />
                </div>
                <span> inventory</span>
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </div>
    </>
  );
}

// export default Sidebar
