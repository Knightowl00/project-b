import Image from "next/image";

export default function Logo() {
  return (
    <div className=" w-100 max-h-[100px] flex items-center justify-center ">
      <img src="./m-logo.svg" alt="Transit M Logo" className="w-32 h-32" />
    </div>
  );
}
