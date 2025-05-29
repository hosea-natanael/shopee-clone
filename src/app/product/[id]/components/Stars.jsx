"use client"

import { useEffect, useRef } from "react"

export default function Stars({rating}) {
    const star1 = useRef()
    const star2 = useRef()
    const star3 = useRef()
    const star4 = useRef()
    const star5 = useRef()

    useEffect(() => {
        star1.current.style.width = `${rating >= 1 ? 100 : (rating) * 100}%`
        star2.current.style.width = `${rating >= 2 ? 100 : Math.max((rating-1) * 100, 0)}%`
        star3.current.style.width = `${rating >= 3 ? 100 : Math.max((rating-2) * 100, 0)}%`
        star4.current.style.width = `${rating >= 4 ? 100 : Math.max((rating-3) * 100, 0)}%`
        star5.current.style.width = `${rating >= 5 ? 100 : Math.max((rating-4) * 100, 0)}%`
    }, [rating])

    return (
        <div className="flex items-center">
            <p className="underline underline-offset-8">{rating}</p>
            <div className="flex ml-1 gap-0.5">
                <div className="relative size-3.5">
                    <img className="absolute top-0 left-0" src="/empty-star.svg" alt="" />
                    <div ref={star1} className="h-full overflow-hidden bg-[url('/star.svg')]"/>
                </div>
                <div className="relative size-3.5">
                    <img className="absolute top-0 left-0" src="/empty-star.svg" alt="" />
                    <div ref={star2} className="h-full overflow-hidden bg-[url('/star.svg')]"/>
                </div>
                <div className="relative size-3.5">
                    <img className="absolute top-0 left-0" src="/empty-star.svg" alt="" />
                    <div ref={star3} className="h-full overflow-hidden bg-[url('/star.svg')]"/>
                </div>
                <div className="relative size-3.5">
                    <img className="absolute top-0 left-0" src="/empty-star.svg" alt="" />
                    <div ref={star4} className="h-full overflow-hidden bg-[url('/star.svg')]"/>
                </div>
                <div className="relative size-3.5">
                    <img className="absolute top-0 left-0" src="/empty-star.svg" alt="" />
                    <div ref={star5} className="h-full overflow-hidden bg-[url('/star.svg')]"/>
                </div>
            </div>
        </div>
    )
}