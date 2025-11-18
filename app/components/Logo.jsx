import Image from "next/image";

export default function Logo() {
  return (
    <div className="my-4 w-100 h-[800px] flex items-center justify-center ">
      <Image
        src="/m-logo.png"
        alt="Transit M Logo"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 128px"
        priority
      />
    </div>
  );
}
