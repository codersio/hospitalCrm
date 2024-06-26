import { Link } from '@inertiajs/react';
import React from 'react'


const SidebarSetup = () => {
    return (
        <div className='w-[100%]'>
            <ul className='text-[13px]'>
                <li className='border p-2'><Link href="/admin/setup/doctor-slots">  Slots</Link></li>
                <li className='border p-2'><Link href="/admin/setup/doctor-global-staff">Doctor Shift</Link></li>
                <li className='border p-2'><Link href="/admin/setup/global-staff">Shift</Link></li>

            </ul>
        </div>
    );
}

export default SidebarSetup;