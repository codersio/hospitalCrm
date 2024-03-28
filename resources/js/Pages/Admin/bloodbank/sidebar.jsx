import { Link } from '@inertiajs/react';
import React from 'react'


const SidebarSetup = () => {
    return (
        <div className='w-[100%]'>
            <ul className='text-[13px]'>
                <li className='border p-2'><Link href="/admin/setup/bloodbank-product">Products</Link></li>
                <li className='border p-2'><Link href="/admin/setup/bloodbank-type">Blood Type</Link></li>

            </ul>
        </div>
    );
}

export default SidebarSetup;