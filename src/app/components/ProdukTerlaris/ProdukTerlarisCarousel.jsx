import Carousel from "@/app/components/Carousel";
import ProdukTerlarisItem from "./ProdukTerlarisItem";

export default async function ProdukTerlarisCarousel() {
    const data = await fetch("http://localhost:3000/api/produk-terlaris")
    const produkTerlarisItems = await data.json()

    return (
        <Carousel maxNum={3} step={100} lastStep={77.5}>
            <div className="flex gap-[23px] p-5">
                {produkTerlarisItems.map((item) => 
                <ProdukTerlarisItem
                key={item.id}
                href={item.href}
                imgSrc={item.imgSrc} 
                subText={item.subText}
                text={item.text}
                />
                )}
            </div>
        </Carousel>
    )
}