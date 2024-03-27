import React from 'react'


const Sidebar = () => {
    return (
        <div className='w-[100%]'>
            <ul className='text-[13px]'>
                <li className='border p-2'><a href="">Charges</a></li>
                <li className='border p-2'><a href="">Charge Category</a></li>
                <li className='border p-2'><a href="">Charge Type</a></li>
                <li className='border p-2'><a href="">Tax Category</a></li>
                <li className='border p-2'><a href="">Unit Type</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;