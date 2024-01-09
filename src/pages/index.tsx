import Image from "next/image";
import { Navbar, Photogal, Services } from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Photogal />
      <Services />
    </main>
  );
}
