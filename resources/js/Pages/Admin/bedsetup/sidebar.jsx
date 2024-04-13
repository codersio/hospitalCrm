import { Link } from '@inertiajs/react';
import React from 'react'


const SidebarSetup = () => {
    return (
        <div className='w-[100%]'>
            <ul className='text-[13px]'>
                <li className='border p-2'><Link href="/admin/setup/bed">Bed </Link></li>
                <li className='border p-2'><Link href="/admin/setup/bed-group">Bed Group</Link></li>
                <li className='border p-2'><Link href="/admin/setup/bed-type">Blood Type</Link></li>
                <li className='border p-2'><Link href="/admin/setup/floor-type">Floor</Link></li>

            </ul>
        </div>
    );
}

export default SidebarSetup;