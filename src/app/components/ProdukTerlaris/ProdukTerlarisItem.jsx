import Link from "next/link";

export default function ProdukTerlarisItem({href, imgSrc, subText, text}) {
    return (
        <Link href={href}>
            <div className="relative size-44">
                <div className="">
                    <img src={imgSrc} alt="" />
                </div>
                <div className="absolute top-0 size-8">
                    <img src="top.png" alt="" />
                </div>
                <div className="absolute bottom-0 bg-black/20 w-full">
                    <p className="text-white text-sm text-center font-medium p-1">{subText}</p>
                </div>
                </div>
            <div className="w-44 font-medium text-lg text-gray-600 mt-5">
                <p>{text}</p>
            </div>
        </Link>
    )
}