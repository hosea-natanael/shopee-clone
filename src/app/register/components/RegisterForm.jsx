"use client"
import Link from "next/link";
import { useMemo, useState } from "react";

export default function RegisterForm() {
    const [phone, setPhone] = useState("")

    const buttonDisabled = useMemo(() => {
        return phone == ""
    })

    return (
        <div className="flex flex-col w-[25rem] p-7 bg-white rounded-sm">
            <div className="text-xl">
                <p>Daftar</p>
            </div>
            <div className="mt-5 w-full">
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full py-2 px-3 placeholder:text-sm placeholder:text-gray-300 focus:border-black rounded-sm border-gray-300 border focus:outline-none" type="text" placeholder="Nomor Telepon" />
            </div>
            <div className="mt-8">
                <button disabled={buttonDisabled} className="w-full bg-primary disabled:cursor-not-allowed disabled:opacity-70 text-white py-3 text-sm rounded-sm">BERIKIUTNYA</button>
            </div>
            <div className="mt-10 relative">
                <div className="bg-gray-300 h-[1px]"></div>
                <div className="absolute -top-2 w-full flex justify-center">
                    <p className="text-gray-300 text-xs w-fit bg-white text-center px-2">ATAU</p>
                </div>
            </div>
            <div className="flex mt-7 gap-3">
                <button className="flex gap-2 justify-center items-center border border-gray-300 w-full h-10">
                    <img className="size-6" src="facebook-icon-blue.png" alt="" />
                    <p className="text-sm">Facebook</p>
                </button>
                <button className="flex gap-2 justify-center items-center border border-gray-300 w-full h-10">
                    <img className="size-6" src="google-icon.png" alt="" />
                    <p className="text-sm">Google</p>
                </button>
            </div>
            <div className="mt-8 flex gap-1 justify-center items-center text-sm">
                <p className="text-gray-300">Punya akun?</p>
                <Link className="text-primary font-medium" href={"/login"}>Log in</Link>
            </div>
        </div>
    )
}