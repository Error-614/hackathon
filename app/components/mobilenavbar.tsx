import Image from 'next/image';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
export default function Mobilenavbar(){
    return(
        <main>
            <Sheet>
              <SheetTrigger  className="pl-96">
                <div>
              <AlignJustify/>
                </div>
              </SheetTrigger>
              <SheetContent side={'right'}>
                <SheetHeader>
                  <SheetTitle className='w-20'>
                    <Image src="/Avion.png" alt="avion" width={118} height={24}></Image>
                    </SheetTitle>
                     <SheetDescription >
                        <div className='flex justify-around pt-4 w-20 gap-3'>
               
                        <Image src="/Vector (1).png" alt="vector" width={16} height={11} />
                        <Image src="/Cart1.png" alt="Cart1" width={32} height={32} />
                        <Image src="/User--avatar.png" alt="Wishlist" width={32} height={32} />
                        </div>

                        <div className=' pt-4 text-xs' >
                        <p><Link href= "#" >Plant pots</Link></p>
                        <p><Link href= "#">Ceramics</Link></p>
                        <p><Link href= "#">Tables</Link></p>
                        <p><Link href= "#">Chairs</Link></p>
                        <p><Link href= "#">Crockery</Link></p>
                        <p><Link href= "#">Tableware</Link></p>
                        <p><Link href= "#">Cutlery</Link></p>
                        </div>
                        

                     </SheetDescription>
                   </SheetHeader>
                 </SheetContent>
            </Sheet>

        </main>
    )
}