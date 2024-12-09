import Emailsignup from "./components/emailsignup";
import Features from "./components/features";
import Herosection from "./components/herosection";
import Landingpage from "./components/landingpage";
import Listing from "./components/listing";
import Listings from "./components/listings";
import Productlisting from "./components/productlisting";
import Shoppingcart from "./components/shoppingcart";



export default function Home (){
  return (
    <main>
      <Herosection/>
      <Features/>
      <Listings/>
      <Listing/>
      <Emailsignup/>
      <Landingpage/>
      <Shoppingcart/>
      <Productlisting/>
      
      
    </main>
  )
  
}