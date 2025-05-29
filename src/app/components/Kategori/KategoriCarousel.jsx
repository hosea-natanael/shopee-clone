import Kategori from "./Kategori";
import Carousel from "@/app/components/Carousel";

export default function KategoriCarousel() {

    return (
        <Carousel maxNum={1} step={30}>
        <div>
            <div id="one" className="flex transition-transform duration-[600ms] ease-in-out">
                <Kategori imgSrc={"kategori/elektronik.png"} href={"/kategori/elektronik"} text={"Elektronik"}/>
                <Kategori imgSrc={"kategori/komputer.png"} href={"/kategori/komputer"} text={"Komputer & Aksesoris"}/>
                <Kategori imgSrc={"kategori/handphone.png"} href={"/kategori/handphone"} text={"Handphone & Aksesoris"}/>
                <Kategori imgSrc={"kategori/pakaian-pria.png"} href={"/kategori/pakaian-pria"} text={"Pakaian Pria"}/>
                <Kategori imgSrc={"kategori/sepatu-pria.png"} href={"/kategori/sepatu-pria"} text={"Sepatu Pria"}/>
                <Kategori imgSrc={"kategori/tas-pria.png"} href={"/kategori/tas-pria"} text={"Tas Pria"}/>
                <Kategori imgSrc={"kategori/aksesoris-fashion.png"} href={"/kategori/aksesoris-fashion"} text={"Aksesoris Fashion"}/>
                <Kategori imgSrc={"kategori/jam-tangan.png"} href={"/kategori/jam-tangan"} text={"Jam Tangan"}/>
                <Kategori imgSrc={"kategori/kesehatan.png"} href={"/kategori/kesehatan"} text={"Kesehatan"}/>
                <Kategori imgSrc={"kategori/hobi.png"} href={"/kategori/hobi"} text={"Hobi & Koleksi"}/>
                <Kategori imgSrc={"kategori/olahraga.png"} href={"/kategori/olahraga"} text={"Olahraga & Outdoor"}/>
                <Kategori imgSrc={"kategori/souvenir.png"} href={"/kategori/souvenir"} text={"Souvenir & Perlengkapan"}/>
                <Kategori imgSrc={"kategori/voucher.png"} href={"/kategori/voucher"} text={"Voucher"}/>
            </div>
            
            <div id="two" className="flex transition-transform duration-[600ms] ease-in-out">
                <Kategori imgSrc={"kategori/makanan.png"} href={"/kategori/makanan"} text={"Makanan & Minuman"}/>
                <Kategori imgSrc={"kategori/perawatan.png"} href={"/kategori/perwatan"} text={"Perawatan & Kecantikan"}/>
                <Kategori imgSrc={"kategori/perlengkapan.png"} href={"/kategori/perlengkapan"} text={"Perlengkapan Rumah"}/>
                <Kategori imgSrc={"kategori/pakaian-wanita.png"} href={"/kategori/pakaian-wanita"} text={"Pakaian Wanita"}/>
                <Kategori imgSrc={"kategori/fashion-muslim.png"} href={"/kategori/fashion-muslim"} text={"Fashion Muslim"}/>
                <Kategori imgSrc={"kategori/fashion-bayi.png"} href={"/kategori/fashion-bayi"} text={"Fashion Bayi & Anak"}/>
                <Kategori imgSrc={"kategori/ibu-bayi.png"} href={"/kategori/ibu-bayi"} text={"Ibu & Bayi"}/>
                <Kategori imgSrc={"kategori/sepatu-wanita.png"} href={"/kategori/sepatu-wanita"} text={"Sepatu Wanita"}/>
                <Kategori imgSrc={"kategori/tas-wanita.png"} href={"/kategori/tas-wanita"} text={"Tas Wanita"}/>
                <Kategori imgSrc={"kategori/otomotif.png"} href={"/kategori/otomotif"} text={"Otomotif"}/>
                <Kategori imgSrc={"kategori/buku.png"} href={"/kategori/buku"} text={"Buku & Alat Tulis"}/>
                <Kategori imgSrc={"kategori/fotografi.png"} href={"/kategori/fotografi"} text={"Fotografi"}/>
                <Kategori imgSrc={"kategori/deals.png"} href={"/kategori/deals"} text={"Deals Sekitarmu"}/>
            </div>
        </div>
        </Carousel> 


    )

}