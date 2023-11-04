import Galery from "./Galery";
import Previsualizador from "./Previsualizador";
import Upload from "./Upload";
import Modal from "./Modal";
import { useState } from "react";


export default function Main() {
    const [image, setImage] = useState(null);
     const [imagenes,setImagenes] = useState([])

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
    <main className="w-10/12 flex flex-row items-center  mt-20 bg-white py-6 rounded-md shadow-sm shadow-black  justify-evenly">
      <Previsualizador imagen={image} add={addGalery}/>
      <div className="flex flex-col items-center gap-y-4 w-1/2 justify-evenly  h-96">
        <div className="w-full">
        <h1 className="w-full text-center text-2xl mb-2">Galeria</h1>
        <Galery imagenes={imagenes}/>
        </div>
       
      <Upload subirImagen={handleImageChange} />
      </div>
      
    
      
    </main>
     <Modal/>
    </>
  )
}
