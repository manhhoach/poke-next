import Image from "next/image";
import SearchInput from "./components/SearchInput";
import SearchButton from "./components/SearchButton";
import BallImage from "./components/BallImage";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      <BallImage className="-left-25" width={250} height={250} />
      <BallImage className="top-10 -right-5" width={250} height={250} />
      <BallImage className="bottom-5 left-10" width={250} height={250} />

      <div className="w-full flex flex-col items-center mt-20">
        <Image className="" src={'/img/main.png'} alt="" width={250} height={125} />
        <div className="flex items-center">
          <SearchInput />
          <SearchButton />
        </div>
      </div>
    </main>
  );
}
