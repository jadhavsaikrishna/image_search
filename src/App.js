import React from 'react';
import './App.css';
import axios from  "axios";
import { useState } from "react";

function App() {


  const [image, setImage] = useState("");
  const clientId = "MMErkOferTQrF5FjOdDE7m99-cgKqKznSXqFs4XhzeI";
  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    setImage(event.target.value);
    };
    const handleSubmit = () => {
      console.log(image);
      
    const url = "https://api.unsplash.com/search/photos?page=1&query=" +
    image + "&client_id=" + clientId;
    axios.get(url).then((response) => {
    setResult(response.data.results);
    });
    };
  
  return (
  <div className="app">
  <div className="heading">
   <h1>React Image Search Using Unsplash API.</h1>
  </div>
  <div className="input">
   <input type="text" name="image" placeholder="Search for images" onChange={handleChange} type="text" name="image" placeholder="Search for images"  />
   </div>
   <button onClick={handleSubmit} type="submit">Search</button>
  


<div className="result">
  {result.map((image) => (
  <>
   <div className="card">
    <img src={image.urls.thumb} />
    <p className="username"> Photo by {image.user.name}</p>
    <p className="like">👍 {image.likes}</p>
   </div>
  </>
   ))}
</div>
</div>
);

  
  }

export default App;
