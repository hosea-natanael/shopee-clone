import Link from "next/link";

export default function Kategori({imgSrc, href, text}) {
    return (
        <Link className="transition-all hover:shadow-lg flex flex-col shrink-0 justify-center items-center w-[120px] h-[151px] border-t border-r border-gray-100" href={href}>
            <img className="w-24" src={imgSrc} alt="" />
            <p className="text-sm text-center">{text}</p>
        </Link>
    )
}