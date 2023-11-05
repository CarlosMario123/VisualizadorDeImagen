import ImageGallery from "./ImageGallery";


export default function Galery({imagenes,setImgModal,setView}) {
    const condicion = imagenes.length == 0
    
  return (
    <div className="flex flex-row items-center w-full h-32 px-1 py-1 overflow-hidden overflow-x-auto bg-slate-200 gap-x-2">
     {condicion ? (
        <p className="w-full text-center">No has guardado ninguna imagen</p>
      ) : (
        imagenes.map((img, index) => {
          return <ImageGallery imagen={img} key={index} id={index} setImageModal={setImgModal} setView={setView}/>;
        })
      )}
    </div>
  )
}
