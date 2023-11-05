import Galery from "./Galery";
import Previsualizador from "./Previsualizador";
import Upload from "./Upload";
import Modal from "./Modal";
import { useState } from "react";


export default function Main() {
    const [image, setImage] = useState(null);
     const [imagenes,setImagenes] = useState([])
     const [imgModal,setImgModal]= useState(null)
     const [viewModal,setViewModal]= useState(false)

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const imageConverted = URL.createObjectURL(file);
        setImage(imageConverted);
   
      };
    
      const addGalery = ()=>{
        setImagenes((prevImagenes) => [...prevImagenes,image]);
      }


  return (
    <>
    <main className="flex flex-row items-center w-10/12 py-6 mt-20 bg-white rounded-md shadow-sm shadow-black justify-evenly">
      <Previsualizador imagen={image} add={addGalery}/>
      <div className="flex flex-col items-center w-1/2 gap-y-4 justify-evenly h-96">
        <div className="w-full">
        <h1 className="w-full mb-2 text-2xl text-center">Galeria</h1>
        <Galery imagenes={imagenes} setImgModal={setImgModal} setView={setViewModal}/>
        </div>
       
      <Upload subirImagen={handleImageChange} />
      </div>
      
    
      
    </main>
     <Modal imag={imgModal} setView={setViewModal} view={viewModal}/>
    </>
  )
}
