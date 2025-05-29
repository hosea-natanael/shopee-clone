import Link from "next/link"

export default function Shortcut({imgSrc, href, text}) {
    return (
        <Link href={href} className={`flex flex-col gap-2 justify-start items-center w-40`}>
            <div className="w-11">
                <img src={imgSrc} alt="" />
            </div>
            <p className="font-normal text-xsm text-center leading-3">{text}</p>
        </Link>
    )
}