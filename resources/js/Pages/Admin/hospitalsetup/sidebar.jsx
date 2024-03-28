import { Link } from '@inertiajs/react';
import React from 'react'


const Sidebar = () => {
    return (
        <div className='w-[100%]'>
            <ul className='text-[13px]'>
                <li className='border p-2'><Link href="/admin/setup/hospital-charge">Charges</Link></li>
                <li className='border p-2'><Link href="/admin/setup/hospital-charge-category">Charge Category</Link></li>
                <li className='border p-2'><Link href="/admin/setup/hospital-charge-type">Charge Type</Link></li>
                <li className='border p-2'><Link href="/admin/setup/hospital-tax-category">Tax Category</Link></li>
                <li className='border p-2'><Link href="/admin/setup/hospital">Unit Type</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;