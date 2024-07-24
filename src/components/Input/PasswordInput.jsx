import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const PasswordInput = ({value, onChange, placeholder}) => {
    const [isShowPassword,setIsShowPassword]=useState(false);

    const toogleShowPassword=() => {
        setIsShowPassword(!isShowPassword);
    };


  return (
<div className="space-y-4 md:space-y-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
    <div className="relative">
        <input
            value={value}
            onChange={onChange}
            type={isShowPassword ? "text" : "password"}
            placeholder={placeholder || "••••••••"}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
        />
       {isShowPassword ? ( <FaRegEye
            size={22}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 cursor-pointer"
            onClick={() => toogleShowPassword()}
        /> ):( <FaRegEyeSlash
              size={22}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 cursor-pointer'
              onClick={()=>toogleShowPassword()}
              /> )
}
    </div>
</div>
   



  )
}

export default PasswordInput