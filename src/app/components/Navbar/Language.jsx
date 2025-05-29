'use client'
import { useState } from "react"

export default function Language() {

    const [language, setLanguage] = useState("bahasa")
    const [hover, setHover] = useState(false)

    function highlightActiveLanguage(lang) {
        if (language === lang && hover) {
            return "text-primary"
        }
    }

    function textLanguage(){
        return language === "bahasa" ? "Bahasa Indonesia" : "English"
    }

    return (
        <span 
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        className="group cursor-pointer transition-all hover:text-gray-300 relative flex justify-center items-center gap-1 h-full ml-2">
            <svg className="h-4 w-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5.33464 8.00004C5.33464 11.6819 6.52854 14.6667 8.0013 14.6667C9.47406 14.6667 10.668 11.6819 10.668 8.00004C10.668 4.31814 9.47406 1.33337 8.0013 1.33337C6.52854 1.33337 5.33464 4.31814 5.33464 8.00004Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.33398 8H14.6673" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <p className="">{textLanguage()}</p>
            <svg className="" viewBox="0 0 12 12" fill="none" width="12" height="12" color="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M6 8.146L11.146 3l.707.707-5.146 5.147a1 1 0 01-1.414 0L.146 3.707.854 3 6 8.146z" fill="currentColor"></path></svg>
            <div 
            onMouseEnter={()=>setHover(false)}
            onMouseLeave={()=>setHover(true)}
            className="transition-all group-hover:scale-100 origin-top scale-0 z-10 flex flex-col rounded-sm text-sm shadow-md gap-4 px-3 py-3 absolute -translate-x-5 translate-y-16 bg-white text-black font-normal w-48">
                <p
                onClick={()=>setLanguage("bahasa")} 
                className={`${highlightActiveLanguage("bahasa")} hover:text-primary`}>Bahasa Indonesia</p>
                <p
                onClick={()=>setLanguage("english")} 
                className={`${highlightActiveLanguage("english")} hover:text-primary`}>English</p>
                <div className="absolute w-full -translate-y-6 left-0 ">
                    <div className="translate-x-24 size-0 border-b-[14px] border-l-[20px] border-r-[20px] border-x-transparent border-white"></div>
                </div>
            </div>
        </span>
    )
}