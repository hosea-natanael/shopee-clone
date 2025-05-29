"use client"
import { useEffect, useRef, useState } from "react"

export default function Carousel({maxNum, step, lastStep = 0, duration = 600, children}) {

    const [num, setNum] = useState(0)
    const slideEl = useRef()
    const nextEl = useRef()
    const prevEl = useRef()

    function incNum() {
        setNum(Math.min(maxNum, num+1))
    }
    function decNum() {
        setNum(Math.max(0, num-1))
    }

    useEffect(() => {
        if (lastStep != 0 && num == maxNum) {
            slideEl.current.style.transform = `translateX(${-num * lastStep}%)`
        } else {
            slideEl.current.style.transform = `translateX(${-num * step}%)`
        }
    }, [num])

    useEffect(() => {
        const delay = setTimeout(() => {
            if (num == maxNum) {
                nextEl.current.style.display = "none"
            } else {
                nextEl.current.style.display = "flex"
            }

            if (num == 0) {
                prevEl.current.style.display = "none"
            } else {
                prevEl.current.style.display = "flex"
            }
        }, duration)

        return () => clearTimeout(delay)
    }, [num])

    useEffect(() => {
        prevEl.current.style.display = "none"
    }, [])
    

    return (
        <div className="group w-full flex relative">
            <div className="overflow-hidden">
                <div ref={slideEl} className={`flex transition-transform duration-[${duration}ms]`}>
                    {children}
                </div>
            </div>
            <div className="absolute w-full h-full pointer-events-none">
                <div
                    ref={prevEl}
                    onClick={decNum}
                    className="
                    transition-all group-hover:size-12 
                    size-6 absolute top-0 bottom-0 my-auto -translate-x-4
                    pointer-events-auto cursor-pointer
                    rounded-full bg-white shadow-md
                    flex justify-center items-center"
                >
                    <div className="
                        transition-all group-hover:size-4 group-hover:translate-y-[4px] group-hover:-translate-x-[3px]
                        size-2 translate-y-[2px] -translate-x-[1px] absolute
                        fill-gray-400 rotate-180"
                    >
                        <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" ><polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon></svg>
                    </div>
                </div>
                <div
                ref={nextEl}
                onClick={incNum} 
                className="
                    transition-all group-hover:size-12 
                    size-6 absolute top-0 bottom-0 right-0 my-auto translate-x-4
                    pointer-events-auto cursor-pointer
                    rounded-full bg-white shadow-md
                    flex justify-center items-center"
                >
                    <div className="
                        transition-all group-hover:size-4 group-hover:-translate-y-[4px] group-hover:translate-x-[3px]
                        size-2 -translate-y-[3px] translate-x-[1px] absolute
                        fill-gray-400"
                    >
                        <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0"><polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}