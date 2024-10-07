"use client"
import { useEffect, useState } from "react";
import Navbar from "@/app/components/aboutuspage/aboutnavbar";
import Footer from "@/app/components/footer";
import Services from "@/app/components/services/servicelist";
import Technologies from "@/app/components/services/tools";
import DetailsSection from "@/app/components/services/detail";
import ServicesHero from "@/app/components/services/hero";

export default function AboutUs() {
  const [isOverview, setIsOverview] = useState(true);

  const handleScroll = () => {
    const overviewSection = document.getElementById("services");
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
        <Navbar isOverview={isOverview} />
        <ServicesHero/>
        <Services />
        {/* <DetailsSection/> */}
        {/* <Technologies/> */}
        <Footer/>
    </div>
  );
}
