import { Link } from "@inertiajs/react";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdSwitchAccount } from "react-icons/md";
import { FaCalendarAlt, FaAmbulance } from "react-icons/fa";
import { TbStethoscope } from "react-icons/tb";
import { FaProcedures } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { RiFlaskFill } from "react-icons/ri";
import { FaMicroscope } from "react-icons/fa";
export default function Sidebar() {
  return (
    <>
      <div className="bg-gray-800 text-white  flex-shrink-0">
        <div className="p-4 ">
          <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
          <ul className=" text-[13px] space-y-7 mt-9">
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
              <Link href="/admin/ambulance" className="flex space-x-2">
                <div className="icon grid place-items-center">
                  <FaAmbulance />
                </div>
                <span> Ambulance</span>
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
