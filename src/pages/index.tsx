import {
  Navbar,
  Photogal,
  Services,
  Suscribe,
  Aboutus,
  Footer,
  Readings,
  Asseenin,
} from "@/components";

export default function index() {
  return (
    <main>
      <Photogal />
      <Services />
      <Suscribe />
      <Aboutus />
      <Readings />
      <Asseenin />
    </main>
  );
}
