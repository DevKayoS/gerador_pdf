interface StyleProps {
  fontSize: string,
  setFonsize: string,
  fontColor: string,
  setFontColor: string,
  isBold: boolean,
  setIsBold: boolean
}

export function TextStyleConfig({
  fontSize,
  setFonsize,
  fontColor,
  setFontColor,
  isBold,
  setIsBold
}: StyleProps){
  return (
    <div className="flex flex-col space-y-2">
      <label className="flex gap-5">
        Font size:
        <input type="text" className="outline-none px-2 bg-slate-600/20 rounded-md shadow-md shadow-black"
        onChange={(e) => setFonsize(e.target.value)}
        />
     </label>
     <label className="flex gap-3">
        Font color:
        <input type="color" className="outline-none px-2 bg-slate-600/20 rounded-md shadow-md shadow-black" 
        onChange={(e) => setFontColor(e.target.value)}
        />
     </label>
     <label className="flex gap-3">
        Bold:
        <input type="checkbox" className="rounded-full appearance-none checked:bg-emerald-700  px-5 bg-slate-600/20  shadow-md shadow-black"
        onChange={(e) => setIsBold(e.target.value)}
        />
     </label>

    </div>
  )
}