

export default function Upload({subirImagen}) {
  return (
    <div>
       <label htmlFor="file-input" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mb-4">
    Subir archivo
  </label>
  <input type="file" id="file-input" className="hidden" onChange={subirImagen}/>
    </div>
  )
}
