import {ImageUpload} from "./imageUpload"
import {TextStyleConfig} from "./textStyle"
import { useState } from "react"

import pdfMake from 'pdfmake/build/pdfMake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export function GeneratePDF() {
  const [title, setTile] = useState("")
  const [description, setDescription] = useState("")

  const generatePDF = () => {
    const documentDefinition = {
      content : [
      {text: `Título: ${title}`},
      {text: `Descrição: ${description}`}
      ]
    }

    pdfMake.createPdf(documentDefinition).download()
  }

  return (
    <div className="flex flex-col space-y-3 ">
     <label className="flex gap-10">
        Titulo: 
        <input type="text"  className="outline-none px-2 bg-slate-600/20 rounded-md shadow-md shadow-black" 
        value={title}
        onChange={(e) => setTile(e.target.value)}
        />
     </label>
     <label className="flex gap-3">
        Descrição:
        <input type="text" className="outline-none bg-slate-600/20 rounded-md shadow-md shadow-black px-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
     </label>
      <TextStyleConfig/>
      <ImageUpload/>
      <button className="bg-gradient-to-r w-32 flex items-center m-auto justify-center rounded-full  hover:bg-gradient-to-r hover:from-emerald-700 hover:to-violet-700"
      onClick={generatePDF}
      >Gerar PDF 
      </button>
    </div>
  )
}