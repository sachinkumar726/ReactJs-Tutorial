import React from 'react'
import React, { useId } from 'react';


const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...proprs
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'
            htmlFor={proprs.id}>
                {label}
                </label>
            }
            <input type={type}
            className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 suration-200
            border-gray-200 w-full ${className}`}
            ref={ref}
            {...proprs}
            id ={id}
            />
        </div>
    )
})

export default Input;