// Toast.js
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ message, type }) => {
    const showToast = () => {
        switch (type) {
            case 'success':
                toast.success(message);
                break;
            case 'error':
                toast.error(message);
                break;
            case 'info':
                toast.info(message);
                break;
            default:
                toast(message);
        }
    };

    return (
        <div>
            {showToast()}
        </div>
    );
};

export default Toast;
