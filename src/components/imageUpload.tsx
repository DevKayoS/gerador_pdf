export function ImageUpload() {
  return (
    <div className="flex ">
      <label>
        Upload Image:
        <input type="file" accept="image/*"  className="block w-full text-sm text-slate-500
      file:mr-4  file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-slate-50 file:text-violet-700
      hover:file:bg-violet-100"/>
     </label>
    </div>
  )
}