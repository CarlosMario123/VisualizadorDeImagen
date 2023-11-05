import { useState } from "react"
export default function ImageGallery({imagen,id,setImageModal,setView}) {

    const {llave,setLlave} = useState(id);

    const asignarModal = ()=>{
      setView(true);
       setImageModal(imagen)
    
    }
  return (
    <>
       <button onClick={asignarModal}><img src={imagen} className="w-28 h-28" /></button>
    </>
  )
}
