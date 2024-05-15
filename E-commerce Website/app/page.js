import Image from "next/image";
import "./style.css";
import Navbar from "./components/navbar.js"
import Main1 from "./components/main1.js"
import Main2 from "./components/main2.js"
import Main3 from "./components/main3.js"
import Main4 from "./components/main4.js"
import Footer from "./components/footer.js"

export default function Home() {
  return (
   <>
   <Navbar/>
   <Main1/>
   <Main2/>
   <Main3/>
   <Main4/>
   <Footer/>
   </>
  );
}
