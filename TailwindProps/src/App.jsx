import React from 'react';
import Card from './components/Card.jsx';

function App() {

  // let myobj = {
  //   username: "hitesh",
  //   age: 21
  // }
  // let newarr = [1,2,3]

  return (
    <div className="app-container">
      <h1 className="title">Hii React</h1>
      <div className="card-container">
        <Card username="Sachin" role="Software Engineering" /><br />
        <Card username="Mandal"  role="Web Developer"/>
      </div>
    </div>
  );
}

export default App;
