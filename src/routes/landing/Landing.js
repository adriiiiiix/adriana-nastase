import AboutPreview from "./AboutPreview.js";
import HeaderPreview from "./HeaderPreview.js";
import PortfolioPreview from "./PortfolioPreview.js";
import ContactPreview from "./ContactPreview.js";
import { Footer } from "../../components";
import ScrollButton from "../../components/ScrollButton.js";
import { useEffect } from "react";

const Mainpage = () => {
  useEffect(() => {
    document.title = "Adriana Năstase | Personal Portfolio";
  })
  return (
    <article className="main-page">
      <HeaderPreview />
      <AboutPreview />
      <PortfolioPreview />
      <ContactPreview />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default Mainpage;
