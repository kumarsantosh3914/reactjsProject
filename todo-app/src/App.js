import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Card from './card';

function App() {

  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a4dc0142e9fc4153a897b45e20e65392');
    console.log("RESPONSE", data);

    const details = data.articles;
    // console.log(details);
    setDetails(details);
    // console.log(details);
  }

  useEffect(() => {
    fetchDetails();
  }, [])

  return (
    <>
      <Card myname="hitesh" details={details} />
    </>
  );
}

export default App;
