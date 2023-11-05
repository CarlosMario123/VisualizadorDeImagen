import { useState } from "react";

export default function Modal({imag,setView,view}) {

  return (
    <div className={`py-4 items-center flex flex-col absolute bg-gray-200 w-[30rem] h-96 top-[10rem] ${!view && " hidden"}`}>
      <img src={imag} alt="" className="w-72 h-72 " />
      <button className="w-32 p-2 mt-2 text-white bg-red-500 rounded-sm" onClick={()=>{setView(false)}}>Cerrar</button>
    </div>
  )
}
