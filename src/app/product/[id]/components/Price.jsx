export default function Price({from, to, original, discount}) {
    return (
        <div className="flex bg-gray-50 p-4 mt-3 gap-2 items-center">
            <p className="text-3xl text-primary font-medium">{from}</p> 
            {to && 
            <>
                <p className="text-3xl text-primary font-medium">-</p> 
                <p className="text-3xl text-primary font-medium">{to}</p> 
            </> 
            }
            {original && 
            <>
                <s className="text-gray-500">{original}</s> 
                <p className="bg-red-100 text-primary text-xs font-semibold px-1">{discount}</p> 
            </> 
            }
        </div>
    )
}