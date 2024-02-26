import Projects from "./Projects.js";
import Footer from "../../components/footer/Footer.js";
import PortfolioDescription from "./PortfolioDescription.js";
import ScrollButton from "../../components/ScrollButton.js";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Adriana Năstase";
  })
  return (
    <article className="portfolio-main">
      <PortfolioDescription />
      <Projects />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default Portfolio;
