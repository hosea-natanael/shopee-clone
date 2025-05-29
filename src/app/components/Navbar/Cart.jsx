import Link from "next/link";

export default function Cart() {
    return (
        <div className="group w-6 relative">
            <Link className="fill-white stroke-1 stroke-white -translate-x-2 translate-y-2" href={"/keranjang"}>
                <svg viewBox="0 0 26.6 25.6" ><title>Shopping Cart Icon</title><polyline fill="none" points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.5"></polyline><circle cx="10.7" cy="23" r="2.2" stroke="none"></circle><circle cx="19.7" cy="23" r="2.2" stroke="none"></circle></svg>    
            </Link>
            <div className="group-hover:scale-100 group-hover:opacity-100 scale-0 opacity-0 transition duration-200">
                <div className="absolute w-10 h-4 bg-transparent -right-2"></div>
                <div className="absolute -right-2 top-2 size-0 border-b-[20px] border-l-[20px] border-r-[20px] border-x-transparent border-white"></div>
                <div className="absolute shadow-lg rounded-sm flex flex-col justify-center items-center bg-white w-96 h-60 -right-2 top-4">
                    <div className="size-24">
                        <img src="/cart-kosong.png" alt="" />
                    </div>
                    <p className="text-gray-600 font-normal">Belum Ada Produk</p>
                </div>
            </div>
        </div>
    )
}