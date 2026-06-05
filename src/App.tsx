import { useEffect } from "react";
import BandIntro from "./components/BandIntro";
import BandMembers from "./components/BandMembers";
import ContactCTA from "./components/ContactCTA";
import FeaturedVideos from "./components/FeaturedVideos";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SampleSetlist from "./components/SampleSetlist";
import WhyBookUs from "./components/WhyBookUs";
import { bandInfo } from "./data/siteContent";

function App() {
  useEffect(() => {
    document.title = `${bandInfo.name} | Live Rock Band`;
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-stone-950 text-stone-100">
      <Navbar />
      <main>
        <Hero />
        <BandIntro />
        <FeaturedVideos />
        <WhyBookUs />
        <SampleSetlist />
        <BandMembers />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
