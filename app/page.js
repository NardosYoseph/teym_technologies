"use client"
import { useEffect, useState } from "react";
import Overview from "./components/homepage/overviewSection";
import KeyFeatures from "./components/homepage/services";
import CTA from "./components/homepage/CTA";
import Testimonials from "./components/homepage/testimonals";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  const [isOverview, setIsOverview] = useState(true);

  const handleScroll = () => {
    const overviewSection = document.getElementById("overview");
    if (overviewSection) {
      const rect = overviewSection.getBoundingClientRect();
      setIsOverview(rect.top >= 0 && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen p-0">
      <main className="flex flex-col p-0">
        <Navbar isOverview={isOverview} />
        <Overview />
        <KeyFeatures />
        <CTA />
        {/* <Testimonials /> */}
        <Footer/>
      </main>
    </div>
  );
}
