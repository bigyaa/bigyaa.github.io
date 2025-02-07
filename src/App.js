import React, { useEffect, useState } from 'react';
import info from './data.json';
const Footer = React.lazy(() => import("./components/Footer"));
const FrontPage = React.lazy(() => import("./components/FrontPage"));
const Experiences = React.lazy(() => import("./components/Experiences"));

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(info);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <FrontPage />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
