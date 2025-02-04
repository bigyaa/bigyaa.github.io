import React, { useEffect, useState } from 'react';
import info from './data.json';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
// import FrontPage from './components/FrontPage';
import Header from './components/Header';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(info);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      {/* <FrontPage /> */}
      <Header />
      <Timeline experiences={data.experiences} />
      <Footer />
    </div>
  );
}

export default App;
