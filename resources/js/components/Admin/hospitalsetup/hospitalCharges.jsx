import React from 'react'
import Sidebar from '../partials/sidebar';
import Header from '../partials/Header';

// // import Sidebar from './sidebar';
// import Sidebarsetup from './sidebar';

const HospitalCharges = () => {
    return (
        <div className="flex h-screen">

            <div className="bg-gray-800 text-white w-[11%] flex-shrink-0">

                <Sidebar />
            </div>


            <div className="flex-grow bg-gray-100 ">
                <Header />

            </div>
        </div>
    );
}

export default HospitalCharges;