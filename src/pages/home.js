import Image from "next/image";import Feature from "@/component/Home/feature";
import Banner from "@/component/Home/Banner";
import Moneyelect from "@/component/Home/moneyelect";
import Controlquno from "@/component/Home/controlquno";
import Storm from "@/component/Home/storm";
import Selected from "@/component/Home/selected";
export default function Home() {
  return (
   <>
   <Banner/>
    <Feature/>
    <Moneyelect/>
    <Selected/>
    <Controlquno/>
    <Storm/>
   </>
  );
}
