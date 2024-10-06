"use client"
import { useEffect, useState } from "react";
import Navbar from "@/app/components/aboutuspage/aboutnavbar";
import CompanyBackground from "@/app/components/aboutuspage/companybg";
import Footer from "@/app/components/footer";
import VisionMission from "@/app/components/aboutuspage/vission";
import TeamSection from "@/app/components/aboutuspage/team";
import Achievements from "@/app/components/aboutuspage/achivements";

export default function AboutUs() {
  const [isOverview, setIsOverview] = useState(true);

  const handleScroll = () => {
    const overviewSection = document.getElementById("company-background");
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
        <CompanyBackground />
        <VisionMission/>
        <TeamSection />
        <Achievements />
        <Footer/>
    </div>
  );
}
