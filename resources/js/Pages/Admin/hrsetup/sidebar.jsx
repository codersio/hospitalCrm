import { Link } from '@inertiajs/react';
import React from 'react'


const SidebarSetup = () => {
    return (
        <div className='w-[100%]'>
            <ul className='text-[13px]'>
                <li className='border p-2'><Link href="/admin/setup/leave-type">Leave Type</Link></li>
                <li className='border p-2'><Link href="/admin/setup/department">Department</Link></li>
                <li className='border p-2'><Link href="/admin/setup/desingnation">Designation</Link></li>
                <li className='border p-2'><Link href="/admin/setup/specalist">Specialist</Link></li>
                {/* <li className='border p-2'><Link href="/admin/setup/medicine-dose-duration">Dose Duration</Link></li> */}
            </ul>
        </div>
    );
}

export default SidebarSetup;