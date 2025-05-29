import Produk from "../Produk"

export default async function ProdukRekomendasi() {
    const res = await fetch("http://localhost:3000/api/produk-rekomendasi")
    const produkRekomendasi = await res.json()

    return (

        <div className="flex flex-wrap bg-gray-100 gap-3 p-3">
            {produkRekomendasi.map((produk) => 
            <Produk
            key={produk.id}
            href={produk.href}
            recommendHref={produk.recommendHref}
            imgSrc={produk.imgSrc}
            productText={produk.productText}
            promo={produk.promo}
            isMallOri={produk.isMallOri} 
            isStar={produk.isStar} 
            isTermurah={produk.isTermurah}
            isLokal={produk.isLokal}
            isCOD={produk.isCOD}
            price={produk.price}
            />
            
            )}
        </div>
    )
}