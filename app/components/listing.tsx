import Image from "next/image"
export default function Listing(){
    return(
        <main className="px-8">
            <div>
                <h1 className="lg:text-2xl md:text-lg text-base"> Our popular products  </h1>
            </div>
            <br />
            <div className="md:flex justify-around">
                <div className="lg:text-l md:text-base text-sm">
                <Image src="/Large.png" alt="image" width={630} height={375}></Image>
                <br />
                <h2>The Poplar suede sofa</h2>
                
                <h2>£980</h2>
                </div>
<br />
                <div className="lg:text-l md:text-base text-sm">
                <Image src="/photo (3).png" alt="image" width={305} height={375}></Image>
                <br />
                <h2>The Dandy chair</h2>
                
                <h2>£250</h2>
                </div>
<br />
                <div className="lg:text-l md:text-base text-sm">
                <Image src="/photo (4).png" alt="image" width={305} height={375}></Image>
                <br />
                <h2>The Dandy chair</h2>

                <h2>£250</h2>
                </div>
            </div>
            <div className="text-center p-6 md:p-12">
            <button className=" font-light text-sm bg-slate-700 rounded bg-opacity-15 py-2 px-3 lg:py-4 lg:px-6 ">View collection</button>
            </div>

        </main>
    )
}