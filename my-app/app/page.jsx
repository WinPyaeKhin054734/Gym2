import Image from "next/image";
import Nav from "./Nav";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fouth from "./Fouth";
import Fith from "./Fith";
import Sev from "./Sev";
import Footer from "./Footer";


export default function Home() {
  return (
  <>

<div className="overflow-hidden">
  <Nav/>

<First/>

<Second/>

<Third/>

<Fouth/>

<Fith/>

<Sev/>

<Footer/>
</div>
</>
  );
}
