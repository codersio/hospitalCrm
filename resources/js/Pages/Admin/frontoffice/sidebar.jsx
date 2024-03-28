import { Link } from '@inertiajs/react';
import React from 'react'


const SidebarSetup = () => {
    return (
        <div className='w-[100%]'>
            <ul className='text-[13px]'>
                <li className='border p-2'><Link href="/admin/setup/purpose-type">Purpose</Link></li>
                <li className='border p-2'><Link href="/admin/setup/complain-type">Complain Type</Link></li>
                {/* <li className='border p-2'><Link href="/admin/setup/medicine-dose">Medicine Dosage</Link></li> */}
                <li className='border p-2'><Link href="/admin/setup/frontoffice-source">Source</Link></li>
                <li className='border p-2'><Link href="/admin/setup/appoinment-pririty">Appointment Priority</Link></li>
            </ul>
        </div>
    );
}

export default SidebarSetup;