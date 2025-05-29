import Link from "next/link";

export default function Download() {
    return (
        <div className="group relative">
            <Link href={"someplace.com"} className="hover:text-red-200 pl-2 border-l-2 border-l-red-400">Download</Link>
            <div className="hidden group-hover:block absolute w-20 h-4"> </div>
            <div className="hidden group-hover:flex flex-col justify-center items-center bg-white absolute w-48 mt-4 rounded-sm">
                <div className="mt-1">
                    <img className="" src="download-qr.png" alt="" />
                </div>
                <div className="flex flex-wrap gap-2 pl-4 mb-4">
                    <img className="w-16" src="app-store.png" alt="" />
                    <img className="w-16" src="google-play.png" alt="" />
                    <img className="w-16" src="app-gallery.png" alt="" />
                </div>
            </div>
        </div>
    )
}