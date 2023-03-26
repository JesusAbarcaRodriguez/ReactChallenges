import React, { useState, useEffect } from 'react';

function sixthChallenge() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {data && data.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default sixthChallenge;
