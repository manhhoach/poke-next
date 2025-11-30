import Image from "next/image";

export default function SearchButton() {
   return <button className="bg-[#FF5350] rounded-lg shadow-xl">
      <Image src={'/icons/search.png'} alt="" width={30} height={30}/>
   </button>
}