import Navbar from "@/app/components/Navbar/Navbar"
import Link from "next/link"
import ImageSelector from "./components/ImageSelector"
import Stars from "./components/Stars"
import Category from "./components/Category"
import Price from "./components/Price"
import Quantity from "./components/Quantity"

export default async function Page({params}) {
    const { id } = await params
    const res = await fetch("http://localhost:3000/api/produk/" + id )
    const json = await res.json()
    const product = json.product

    return (
        <>
            <Navbar/>
            <div className="flex justify-center bg-gray-100">
                <div className="md:w-5/6">
                    <Category categories={product?.category} productName={product?.name}/>
                    <div className="mt-5 bg-white">
                        <div className="flex">
                            <ImageSelector images={product?.images}/>
                            <div className="ml-7 mt-4 w-[660px]">
                                <p className="font-medium text-xl">{product?.name}</p> 

                                <div className="flex mt-2 w-full">
                                    <Stars rating={product?.score?.stars}/>
                                    <div className="ml-3 border-l"></div>
                                    <div className="ml-3 flex items-center">
                                        <p className="underline underline-offset-8">{product?.score?.amount}</p>
                                        <p className="ml-1 text-gray-600 text-sm">Penilaian</p>
                                    </div>
                                    <div className="ml-5 border-l"></div>
                                    <div className="ml-3 flex items-center">
                                        <p>{product?.score?.sold}</p>
                                        <p className="ml-2 text-gray-600 text-sm">Sold</p>
                                        <div className="relative group">
                                            <img className="ml-1" src="/question.svg" alt="question"/>
                                            <div className="hidden group-hover:block">
                                                <div className="absolute  h-5 w-64 -translate-x-1/2 "></div>
                                                <div className="absolute top-[19px] -translate-x-[8px] border-x-transparent border-x-[20px]  border-b-[15px]"></div>
                                                <div className="absolute border bg-white -translate-x-1/2 top-8 p-5">
                                                    <p className="text-sm text-nowrap">Jumlah terjual dihitung berdasarkan pesanan yang telah selesai.</p>
                                                </div>
                                                <div className="absolute top-5 -translate-x-[8px] border-x-transparent border-x-[20px] border-white border-b-[15px]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="ml-auto text-gray-600 text-sm cursor-pointer">Laporkan</p>
                                </div>

                                <Price
                                from={product?.price?.from}
                                to={product?.price?.to}
                                discount={product?.price?.discountPercentage}
                                original={product?.price?.original}/>

                                <div className="mt-1 flex p-4 text-sm items-start">
                                    <p className="text-gray-500 w-28">Pengiriman</p>
                                    <img src="/delivery.svg" alt=""/>
                                    <div className="ml-2">
                                        <div className="flex items-center">
                                            <p>{product?.delivery?.guaranteedDate}</p>
                                            <img className="size-2.5 ml-1" src="/arrow.svg" alt="" />
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {product?.delivery?.lateGuarenteed}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex text-sm p-4 items-center">
                                    <p className="w-28 text-gray-500">Warna</p>
                                    {product?.color?.map(color => (
                                    <div className="flex items-center p-2 border gap-2 hover:text-primary hover:border-primary cursor-pointer mr-2">
                                        <img className="size-6" src={color.img} alt="" />
                                        <p>{color.name}</p>
                                    </div>
                                    ))}
                                </div>

                                <div className="flex text-sm p-4 items-center">
                                    <p className="w-28 text-gray-500">Ukuran</p>
                                    {product?.size?.map(size => (
                                        <div className="py-2 px-5 border hover:text-primary hover:border-primary cursor-pointer mr-2">
                                            <p>{size}</p>
                                        </div>
                                    ))}
                                </div>
                                
                                <Quantity maxQty={product?.quantity}/>

                                <div className="flex p-4 gap-4">
                                    <button className="flex gap-2 bg-red-50 border border-primary py-3 px-5 rounded-sm hover:bg-red-50/60">
                                        <img className="size-5" src="/plus-cart.svg" alt=""/>
                                        <p className="text-primary text-sm">Masukkan Keranjang</p>
                                    </button>

                                    <button className="flex gap-2 bg-primary py-3 px-12 rounded-sm">
                                        <p className="text-white text-sm"> Beli Sekarang </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="pl-10 mt-6 flex items-center">
                            <p>Share:</p>
                            <Link className="ml-1 bg-[url('/logos-3.png')] bg-cover size-6 bg-[center_-100%]" href={"https://facebook.com/messenger"} target="_blank"></Link>
                            <Link className="ml-1 bg-[url('/logos-3.png')] bg-cover size-6 bg-[center_top]" href={"https://facebook.com"} target="_blank"></Link>
                            <Link className="ml-1 bg-[url('/logos-3.png')] bg-cover size-6 bg-[center_-300%]" href={"https://pinterest.com"} target="_blank"></Link>
                            <Link className="ml-1 bg-[url('/logos-3.png')] bg-cover size-6 bg-[center_-400%]" href={"https://twitter.com"} target="_blank"></Link>
                            <div className="ml-10 border-l h-6 "> </div>
                            <div className="ml-10">
                                <svg width="24" height="20" className="vgMiJB"><path d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z" stroke="#FF424F" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinejoin="round"></path></svg>
                            </div>
                            <p className="ml-2">Favorit</p>
                            <p className="ml-1">({product?.favorite})</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}