// src/pages/home.js
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Header />
      </div>
      <div className="flex flex-col">
        <section className="flex justify-center items-center text-center overflow-hidden">
          <Hero />
        </section>
        <section className="flex justify-center items-center text-center overflow-hidden">
          <Products />
        </section>
      </div>
    </div>
  );
}

export default Home;