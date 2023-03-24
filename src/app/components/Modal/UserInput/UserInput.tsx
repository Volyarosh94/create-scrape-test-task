import Image from "next/image";
import { useState } from "react";
import help from '../../../assets/help-circle.svg';

interface Props {
  title: string
  placeholder: string
  isIcon: boolean
}

export const UserInput: React.FC<Props> = ({ title, placeholder, isIcon }) => {
  return (
    <div className="mb-6">
      <label>
        <p className="mb-2 font-medium text-main text-sm inline-block mr-1">{title}</p>
        {isIcon && <Image src={help} alt="help" className="inline-block"/>}
        <input
          type="text"
          placeholder={placeholder}
          className="w-full py-2.5 px-3.5 border-light border rounded-lg shadow-md focus-visible:bg-focuced"
        />
      </label>
    </div>
  )
}
