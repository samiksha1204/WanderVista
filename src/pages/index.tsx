import {
  Navbar,
  Photogal,
  Services,
  Suscribe,
  Aboutus,
  Footer,
  Feedback,
} from "@/components";

export default function index() {
  return (
    <main>
      <Navbar />
      <Photogal />
      <Services />
      <Suscribe />
      <Aboutus />
      <Feedback></Feedback>
      <Footer />
    </main>
  );
}
