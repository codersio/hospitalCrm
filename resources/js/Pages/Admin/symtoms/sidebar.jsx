import { Link } from '@inertiajs/react';
import React from 'react'


const SidebarSetup = () => {
    return (
        <div className='w-[100%]'>
            <ul className='text-[13px]'>
                <li className='border p-2'><Link href="/admin/setup/symtoms-type">Symptoms Type</Link></li>
                <li className='border p-2'><Link href="/admin/setup/symtoms-head">Symptoms Head</Link></li>
                {/* <li className='border p-2'><Link href="/admin/setup/medicine-dose">Medicine Dosage</Link></li> */}
                {/* <li className='border p-2'><Link href="/admin/setup/radiology-parameters">Radiology Parameter</Link></li> */}
                {/* <li className='border p-2'><Link href="/admin/setup/medicine-dose-duration">Dose Duration</Link></li> */}
            </ul>
        </div >
    );
}

export default SidebarSetup;