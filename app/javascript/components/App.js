import React from "react";
import "./App.css";
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="title">
      <h2>Keep Track of your Friends with Friends App</h2>
      <br />
      <a rel="nofollow" href="/users/sign_up"><Button className="btn btn-dark">Get Started</Button></a>
    </div>
  );
}

export default App;
