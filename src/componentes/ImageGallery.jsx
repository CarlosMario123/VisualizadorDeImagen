import { useState } from "react"
export default function ImageGallery({imagen,id}) {

    const {llave,setLlave} = useState(id);
  return (
    <>
       <button ><img src={imagen} className="w-28 h-28" /></button>
    </>
  )
}
