import Image from "next/image"
export default function Footer(){
    return(
        <main className="bg-[#2A254B] text-white  ">
            <div className="md:flex justify-around 
            pt-8
            md:pt-10
            lg:pt-14
            xl:pt-20">
                <div className="space-y-2 md:space-y-4">
                    <div className="h-7 w-28">
                    <h1 className=" text-lg">Menu</h1>
                    </div>
                    <br />
                     <p className="text-xs md:text-sm lg:text-base ">New arrivals</p>
                     <p className="text-xs md:text-sm lg:text-base ">Best sellers</p>
                     <p className="text-xs md:text-sm lg:text-base ">Recently viewed</p>
                     <p className="text-xs md:text-sm lg:text-base ">Popular this week</p>
                     <p className="text-xs md:text-sm lg:text-base ">All products</p>
                </div>
                <br />
                <div className="space-y-2 md:space-y-4">
                    <h1 className="font-medium text-lg">Categories</h1>
                    <br />
                    <div className="text-xs md:text-sm lg:text-base ">Crockery</div>
                    <h2 className="text-xs md:text-sm lg:text-base ">Furniture</h2>
                    <h2 className="text-xs md:text-sm lg:text-base ">Homeware</h2>
                    <h2 className="text-xs md:text-sm lg:text-base ">Plant pots</h2>
                    <h2 className="text-xs md:text-sm lg:text-base ">Chairs</h2>
                    <h2 className="text-xs md:text-sm lg:text-base ">Crockery</h2>
                </div>
                <br />
                <div className="space-y-2 md:space-y-4">
                    <h1 className="font-medium text-lg">Our company</h1>
                    <br />
                    <h2 className="text-xs md:text-sm lg:text-base ">About us</h2>
                    <h2 className="text-xs md:text-sm lg:text-base ">Vacancies</h2>
                    <h2 className="text-xs md:text-sm lg:text-base ">Contact us</h2>
                    <h2 className="text-xs md:text-sm lg:text-base ">Privacy</h2>
                    <h2 className="text-xs md:text-sm lg:text-base ">Returns policy</h2>
                </div>
                <br />
                <div className="space-y-2 md:space-y-4 ">
                    <h1 className="font-medium text-lg">Join our mailing list</h1>
                    <br />
                    <div className=" flex">
                    <input type="email" className="border-b-gray-300 border-b-2 text-sm lg:text-base bg-white bg-opacity-15
                    py-3 px-4
                    lg:py-5 lg:pr-72" placeholder="your@email.com"/>
                    <button className="text-[#2A254B] bg-white py-3 px-4 lg:py-5 lg:px-8">Sign up</button>
                    </div>

                </div>
                <br />
             
            </div>
            <div className="  flex pt-12 border-t-stone-300 border-t-2 border-opacity-90 justify-between">
                <h1 className="text-xs md:text-sm lg:text-base opacity-50">Copyright 2022 Avion LTD</h1>
                <Image src="/logos.png" alt="avion" width={200} height={24}></Image>


            </div>
        </main>
    )
}