import Image from "next/image";
import berberwhite from "@/app/berberwhite.png";
export default function Footer() {
  return (
    <div className="flex justify-center items-center h-[50px] w-full bg-[#292929] max-w-[2000px]">
      <div className="flex items-center justify-between  w-[80%]">

      <div className="h-[60%]  w-[35%] md:h-[20%] md:w-[10%] ">
        <Image src={berberwhite} alt="/" width={5000} height={5000} quality={100} className="w-full h-full object-contain" />
      </div>
      <div className="text-zinc-200 h-[50%] w-[15%]">
       Contact
      </div>
      </div>

    </div>
  );
}
