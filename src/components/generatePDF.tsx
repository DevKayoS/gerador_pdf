import {ImageUpload} from "./imageUpload"
import {TextStyleConfig} from "./textStyle"

export function GeneratePDF() {
  return (
    <div className="flex flex-col space-y-3 ">
     <label className="flex gap-10">
        Titulo: 
        <input type="text"  className="outline-none px-2 bg-slate-600/20 rounded-md shadow-md shadow-black"/>
     </label>
     <label className="flex gap-3">
        Descrição:
        <input type="text" className="outline-none bg-slate-600/20 rounded-md shadow-md shadow-black px-2"/>
     </label>
      <TextStyleConfig/>
      <ImageUpload/>
      <button className="bg-gradient-to-r w-32 flex items-center m-auto justify-center rounded-full  hover:bg-gradient-to-r hover:from-emerald-700 hover:to-violet-700">Gerar PDF</button>
    </div>
  )
}