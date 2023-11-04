

export default function Previsualizador({imagen,add}) {
    const condicion = (imagen ==null)
  return (
    <div className="flex flex-col items-center">
    <div className={` ${(condicion) ?   "border border-dashed border-black" : " rounded-sm "} w-96 h-96  flex items-center justify-center overflow-hidden`}>
        {
            (condicion) ? <p className=" font-sans w-full text-center">No hay imagen para visualizar</p> :   <img src= {imagen} className="w-96 h-96"/>
        }
   
    </div>
    { !condicion && <button className="mt-2 font-medium p-2 bg-blue-600 rounded-md  text-white" onClick={add}>Agregar a la galeria</button> }
    </div>
  )
}
