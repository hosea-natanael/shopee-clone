"use client"
import Link from "next/link";
import PasswordField from "@/app/login/components/PasswordField";
import { useMemo, useState } from "react";
import { useLogin } from "@/app/login/lib/useLogin";

export default function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {isLoading, error, login} = useLogin()

    const loginDisabled = useMemo(() => {
        return !username || !password || isLoading
    })
    
    return (
        <div className="bg-white flex flex-col p-6 w-[25rem] rounded-sm">
            <div className="flex items-center justify-between">
                <p className="text-xl">Log in</p>
                <div className="flex gap-4 relative">
                    <div className="flex items-center bg-caution-bg px-4 py-2 border-caution border-2">
                        <p className="text-caution text-sm font-semibold">Log in dengan QR</p>
                    </div>
                    <div className="absolute top-[10px] left-[145px] size-0 border-l-[10px] border-t-[10px] border-b-[10px] border-y-transparent border-caution"></div>
                    <div className="absolute top-3 left-36 size-0 border-l-[8px] border-t-[8px] border-b-[8px] border-y-transparent border-caution-bg"></div>
                    <svg width="40" height="40" fill="none" className="WfRz00"><g clipPath="url(#clip0)"><path fillRule="evenodd" clipRule="evenodd" d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z" fill="#EE4D2D"></path><path d="M37 37H22.5v3H40V22.5h-3V37z" fill="#EE4D2D"></path><path d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z" fill="#EE4D2D"></path><path fill="#fff" d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h40v40H0z"></path></clipPath></defs></svg>
                </div>
            </div>
            { error &&
            <div className="flex items-start justify-start gap-2 bg-error-bg px-3 py-2 text-sm border border-error mt-5">
                <div className="w-4 shrink-0 translate-y-1">
                    <svg viewBox="0 0 16 16" className="vfeSp5"><path fill="none" stroke="#FF424F" d="M8 15A7 7 0 108 1a7 7 0 000 14z" clipRule="evenodd"></path><rect stroke="none" width="7" height="1.5" x="6.061" y="5" fill="#FF424F" rx=".75" transform="rotate(45 6.06 5)"></rect><rect stroke="none" width="7" height="1.5" fill="#FF424F" rx=".75" transform="scale(-1 1) rotate(45 -11.01 -9.51)"></rect></svg>
                </div>
                {error.message}
            </div>
            }
            <div className="mt-5 w-full">
                <input onChange={(e) => setUsername(e.target.value)} value={username} className="w-full py-2 px-3 placeholder:text-sm placeholder:text-gray-300 focus:border-black rounded-sm border-gray-300 border focus:outline-none" placeholder="No. Handphone/Username/Email" type="text" name="" id="" />
            </div>
            <div className="mt-8 w-full relative">
                <PasswordField password={password} setPassword={setPassword}/>
            </div>
            <div className="mt-8">
                <button onClick={() => login(username, password)} disabled={loginDisabled} className="w-full bg-primary disabled:cursor-not-allowed disabled:opacity-70 text-white py-3 text-sm rounded-sm">LOG IN</button>
            </div>
            <div className="">
                <Link className="text-xs text-blue-600" href={"forgot-password"}>Lupa Password</Link>
            </div>
            <div className="mt-3 relative">
                <div className="bg-gray-300 h-[1px]"></div>
                <div className="absolute -top-2 w-full flex justify-center">
                    <p className="text-gray-300 text-xs w-fit bg-white text-center px-2">ATAU</p>
                </div>
            </div>
            <div className="flex mt-8 gap-3">
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
                <p className="text-gray-300">Baru di Shopee?</p>
                <Link className="text-primary font-medium" href={"register"}>Daftar</Link>
            </div>
        </div>
    )
}