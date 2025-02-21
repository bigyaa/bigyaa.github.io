import dynamic from "next/dynamic";
import info from "../data/experiences";

// Lazy-loaded components
const Footer = dynamic(() => import("../components/Footer"));
const FrontPage = dynamic(() => import("../components/FrontPage"));
const Experiences = dynamic(() => import("../components/Experiences"));

export default function Home(data) {
  return (
    <>
      <FrontPage resume={data.resume} />
      {data.resume ? <Experiences /> : <></>}
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