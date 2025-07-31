import Carousel from "@/app/components/Carousel"
import FlashSaleItem from "@/app/components/Flashsale/FlashSaleItem"

export default async function FlashSaleCarousel() {
    const data = await fetch("http://localhost:3000/api/flash-sale")
    const flashSaleItems = await data.json()
    
    return (
        <>
            <Carousel className="w-5" maxNum={2} step={83}>
                <div className="flex gap-[23px] p-5">
                    {flashSaleItems.map((item) =>
                    <FlashSaleItem
                    key={item.id}
                    imgSrc={item.imgSrc} 
                    isMallOri={item.isMallOri}
                    isCashback={item.isCashback}
                    priceText={item.priceText}
                    hotText={item.hotText}
                    progress={item.progress}
                    isOnFire={item.isOnFire}
                    />
                    )}
                </div>
            </Carousel>              
        </>
    )
}