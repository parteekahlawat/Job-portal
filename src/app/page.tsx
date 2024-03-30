import Image from "next/image";
import Navbar from "./comps/navbar";
import DataPage from "./comps/dataPage";
import InputPage from "./comps/inputPage";

export default function Home() {
  return (
    <>
      <Navbar />
        <DataPage />
          {/* <Navbar/>
         <main className="flex min-h-screen flex-col items-center justify-between p-24 width-100">
        <InputPage/>
         </main> */}
    </>
  );
}
