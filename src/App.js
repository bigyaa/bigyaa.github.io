import React, { useEffect, useState } from 'react';
import info from './data.json';
import Timeline from './components/Timeline';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Experiences from './components/Experiences';

function App() {
  const [data, setData] = useState(info);

  useEffect(() => {
    if (!data) {
      setData(info);
    }
  }, []);
  console.log(data);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
    <Header />
    {/* <About /> */}
    <Timeline experiences={data.experiences}/>
    {/* <Experiences projects={data.projects}/> */}
    <Footer />
  </div>
  );
}

export default App;