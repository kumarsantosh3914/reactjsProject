import React, { useEffect, useState } from "react";
// import Card from "."
import Axios from 'axios';
import Card from './card';
import './App.css';

function App() {

  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a4dc0142e9fc4153a897b45e20e65392');
    console.log("RESPONSE", data);

    const details = data.articles;
    console.log(details);
    setDetails(details);
  }

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>
      <div className="card-list">
        <div className="card">
          <div className="para">
            <h1>{details[0].author}</h1>
            <h4>{details[0].title}</h4>
            <p>{details[0].description}</p>
            <p>{details[0].content}</p>
            <p>{details[0].publishedAt}</p>
          </div>
          <img src={details[0].urlToImage} alt="img" />
        </div>
        <div className="card">
          <h1>{details[1].author}</h1>
          <h4>{details[1].title}</h4>
          <p>{details[1].description}</p>
          <p>{details[1].content}</p>
          <img src={details[1].urlToImage} alt="img" />
          <p>{details[1].publishedAt}</p>
        </div>
        <div className="card">
          <h1>{details[2].author}</h1>
          <h4>{details[2].title}</h4>
          <p>{details[2].description}</p>
          <p>{details[2].content}</p>
          <img src={details[2].urlToImage} alt="img" />
          <p>{details[2].publishedAt}</p>
        </div>
        <div className="card">
          <h1>{details[3].author}</h1>
          <h4>{details[3].title}</h4>
          <p>{details[3].description}</p>
          <p>{details[3].content}</p>
          <img src={details[3].urlToImage} alt="img" />
          <p>{details[3].publishedAt}</p>
        </div>
      </div>
      {/* <h1>{details.title}</h1>
      <div>{details.urlToImage}</div>
      <img className="card-image" src={details} alt="Olympic athlete Katie Zaferes" /> */}
      {/* <Card details={details} /> */}
      {/* <button onClick={fetchDetails}>get Details</button> */}
    </>
  );
}

export default App;
