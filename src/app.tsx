import { GeneratePDF } from "./components/generatePDF";
export function App() {

  return (
    <div className="flex flex-col items-center  mt-16 bg-slate-600/60  w-[500px] h-96 m-auto rounded-lg shadow-lg shadow-black">
      <h1>Gerador de PDF Dinâmico:</h1>
      <div className="flex mt-8">
        <GeneratePDF/>
      </div>
    </div>
  )
}


