import {
  Navbar,
  Photogal,
  Services,
  Suscribe,
  Aboutus,
  Footer,
  Feedback,
} from "@/components";

export default function logo() {
  return (
    <main>
      <Photogal />
      <Services />
      <Suscribe />
      <Aboutus />
      <Feedback />
    </main>
  );
}
