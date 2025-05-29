'use client'

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function FlashSaleItem({imgSrc, isMallOri, isCashback, priceText, hotText, progress, isOnFire}) {

    const progressEl = useRef()

    useEffect(() => {
       progressEl.current.style.width = `${progress/100 * 10}rem`  
    }, [progress])

    return (
        <Link href={"flash-sale"}>
            <div className="relative">
                { isMallOri && 
                <div className="absolute size-14 top-2 -left-[3px]">
                    <img src="mall-ori.png" alt="" />
                </div>
                }
                { isCashback && 
                <div className="absolute size-44 bottom-0">
                    <img src="cashback-gratis-ongkir.png" alt="" />
                </div>
                }
                <div className="size-44">
                    <img src={imgSrc} alt="" />
                </div>
            </div>
            <div className="flex place-content-center mt-3">
                <p className="text-primary font-medium text-lg">{priceText}</p>
            </div>
            <div className="relative px-2 mt-2">
                <div className="w-full h-4 bg-red-300 rounded-full"> </div>
                <div ref={progressEl} className={`absolute h-4 bg-gradient-to-r from-primary-gradient-c to-primary-gradient-d top-0 rounded-l-full`}> </div>
                <p className="absolute left-0 right-0 ml-auto mr-auto text-center -top-[2px] text-white text-xsm font-semibold">{hotText}</p>
                { isOnFire &&
                <div className="absolute left-3 -top-2 size-5">
                    <img src="fire.png" alt="" />
                </div>
                }
            </div>
        </Link>
    )
}