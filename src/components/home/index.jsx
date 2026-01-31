import "./home.css";
import Header from "../header.jsx";
import Footer from "../footer.jsx";

import Hero from "./hero.jsx";
import About from "./about.jsx";
import Culture from "./client-cause.jsx";
import ExpertisePreview from "./our-expertise.jsx";
import Founder from "./founder.jsx";
import TeamPreview from "./team.jsx";
import LegalUpdatesPreview from "./legal-updates.jsx";

export default function HomePage() {
  return (
    <>
      <Header />
       
      <main>
        <Hero />
        <About />
        <Culture />
        <ExpertisePreview />
        <Founder />
        <TeamPreview />
        <LegalUpdatesPreview />
      </main>

      <Footer />
    </>
  );
}
