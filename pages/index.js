import dynamic from "next/dynamic";
import info from "../src/data.json";

// Lazy-loaded components
const Footer = dynamic(() => import("../src/components/Footer"));
const FrontPage = dynamic(() => import("../src/components/FrontPage"));
const Experiences = dynamic(() => import("../src/components/Experiences"));

export default function Home({ data }) {
  return (
    <>
      <FrontPage />
      <Experiences />
      <Footer />
    </>
  );
}

// Preload JSON data for better performance
export async function getStaticProps() {
  return {
    props: { data: info },
  };
}