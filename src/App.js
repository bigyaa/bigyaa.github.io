import React, { useEffect, useState } from 'react';
import info from './data.json';
import Timeline from './components/Timeline';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(info);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <Timeline experiences={data.experiences} />
      <Footer />
    </div>
  );
}

export default App;
