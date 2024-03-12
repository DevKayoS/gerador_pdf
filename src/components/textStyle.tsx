export function TextStyleConfig(){
  return (
    <div className="flex flex-col space-y-2">
      <label className="flex gap-5">
        Font size:
        <input type="text" className="outline-none px-2 bg-slate-600/20 rounded-md shadow-md shadow-black"/>
     </label>
     <label className="flex gap-3">
        Font color:
        <input type="color" className="outline-none px-2 bg-slate-600/20 rounded-md shadow-md shadow-black" />
     </label>
     <label className="flex gap-3">
        Bold:
        <input type="checkbox" className="rounded-full appearance-none checked:bg-emerald-700  px-5 bg-slate-600/20  shadow-md shadow-black"/>
     </label>

    </div>
  )
}