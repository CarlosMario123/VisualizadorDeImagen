import ImageGallery from "./ImageGallery";


export default function Galery({imagenes}) {
    const condicion = imagenes.length == 0
  return (
    <div className="w-full h-32 bg-slate-200 flex-row flex items-center overflow-hidden overflow-x-auto px-1 py-1 gap-x-2">
     {condicion ? (
        <p className="text-center w-full">No has guardado ninguna imagen</p>
      ) : (
        imagenes.map((img, index) => {
          return <ImageGallery imagen={img} key={index} id={index}/>;
        })
      )}
    </div>
  )
}
