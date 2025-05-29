import Link from "next/link"

export default function Produk({
    href,
    recommendHref,
    imgSrc, 
    productText, 
    promo,
    isMallOri, 
    isStar, 
    isTermurah, 
    isLokal, 
    isCOD,
    price}) {
    function promoImg(promo) {
        switch (promo) {
            case "promo":
                return "promo.png"
            case "p-lokal":
                return "promo-lokal.png"
            case "p-ongkir":
                return "promo-gratis-ongkir.png"
            case "ongkir":
                return "gratis-ongkir.png"
        }
    }

    return (
       <div className="transition-all duration-100 group hover:shadow-lg hover:border hover:border-primary hover:bottom-[2px] relative flex flex-col w-[186px] bg-white border border-gray-200">
            <Link href={href} className="relative">
                <img src={imgSrc} alt="" />
                <img className="absolute top-0" src={promoImg(promo)} alt="" />
            </Link>
            <Link href={recommendHref} className="group-hover:block hidden z-10 absolute -bottom-6 -left-[1px] bg-primary w-[186px] py-1">
                <p className="text-white text-center text-xsm">Produk Serupa</p>
            </Link>
            <Link href={href} className="p-2">
                <div>
                    { isMallOri &&
                    <img className="w-14 float-left mt-1 mr-1" src="mall-ori-tag.png" alt="" />
                    }
                    { isStar &&
                    <img className="w-8 float-left mt-1 mr-1" src="star.png" alt="" />
                    }
                    <p>{productText}</p>
                </div>
                <div className="flex items-center justify-start mt-2 gap-2">
                    { isTermurah && 
                    <div className="w-fit px-1 border-[0.9px] border-primary">
                        <p className=" font-light text-primary text-center text-[0.67rem]">Termurah di Shopee</p>
                    </div>
                    }
                    { isLokal && 
                    <div className="w-fit px-1 border-[0.9px] border-primary">
                        <p className=" font-light text-primary text-center text-[0.67rem]">Pilih Lokal</p>
                    </div>
                    }
                    { isCOD &&
                    <div className="w-7">
                        <img  src="cod.png" alt="" />
                    </div>
                    }
                </div>
                <div className="mt-3 flex items-end text-primary font-medium">
                    <p className="text-xs mb-[3px] mr-[2px]">Rp</p><p>{price}</p>
                </div>
            </Link>
       </div> 
    )
}