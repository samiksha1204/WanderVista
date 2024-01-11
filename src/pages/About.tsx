import React from "react";
import { Navbar, Photogal, Services } from "@/components";

export default function () {
  return (
    <div>
      <section id="part1">
        <Navbar />
      </section>
      <section id="part2">
        <Photogal />
      </section>
      <section id="part3">
        <Services />
      </section>
    </div>
  );
}
