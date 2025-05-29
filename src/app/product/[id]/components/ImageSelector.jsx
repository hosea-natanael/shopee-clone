"use client"
import { useEffect, useState } from "react"

export default function ImageSelector({images}) {
    const [imgSelected, setImgSelected] = useState("")
    const [imgs, setImgs] = useState([])

    useEffect(() => {
        if (images) {
            setImgSelected(images[0])
            setImgs(images)
        }
    }, [])

    return (
        <div>
            <div className="p-3">
                <img className="size-[450px]" src={imgSelected} alt="" />
            </div>
            <div className="flex px-3 gap-3">
                {imgs.map((img) => 
                    <img key={img} onMouseEnter={() => setImgSelected(img)} className="size-20 hover:outline outline-2 outline-red-600"src={img} alt="" />
                )}
            </div>
        </div>
    )
}