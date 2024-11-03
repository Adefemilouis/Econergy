import First from "@/components/ui/first";
import Freed from "@/components/ui/freed";
import Government from "@/components/ui/government";
import Header from "@/components/ui/Header";
import How from "@/components/ui/how";
import Peace from "@/components/ui/peace";
import main from "/public/image/main.jpg";
import Search from "@/components/ui/search";
import Tail from "@/components/ui/tail";

import Image from "next/image";

export default function Home() {
  return (
   <>

{/* <div className="h-full w-full bg-primary">
      <div>
      <div  className="flex flex-col bg-primary ">
      <Header />
      </div>
      </div>
  

  </div>
   <div className=" flex flex-col-2 p-16 xl:p-12 mx-18 xl:mx-40  bg-primary   ">
      <div className=" xl:mt-  ">
      <h1 className="h1 xl:max-w-[900px] max-h-[200px] text-white/100 xl:mr-30  ">Our pioneering model enables our partners to bring affordables renewable energy to their members</h1>
      </div>
      <div className="">
       <Photo />
      </div>
    </div> */}

    <div className="h-full bg-primary">
      <div>
        <div className="flex flex-col ">
          <Header />
        </div>
      </div>
    </div>

    <div className="flex flex-row xl:flex-col-2 bg-primary">
      <div className="ml-96">
      <h1 className="h1  text-white/100 mt-96 xl:mt-96  ">Econergy empowers our<br/> partners to control their<br/> energy future
      </h1>
      </div>
    <div className="   ">
    <div className=' '>
      <Image src={main} alt="alt" width={990} height={700} className="" />  
      
    </div>
    </div>
    </div>
<div className="bg-frost padding-container my-72 mx-42">
<First/>
<How />
<Peace />

<Tail />
<Government/>
<Search />

</div>
<Freed />


   </>    
  );
}
