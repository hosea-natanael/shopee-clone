import Link from "next/link";

export default function Category({categories, productName}){
    return (
        <div className="flex items-center gap-2 text-xsm mt-4">
            {categories?.map(category => (
            <>
                <Link className="text-blue-800" href={category.href}>{category.name}</Link>
                <img className="size-3" src="/arrow.svg" alt="bruh" />
            </>
            ))}
            <p>{productName}</p>
        </div>
    )
}