import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // Initialize count state
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from https://kaynnguyen.site/count');
        const response = await axios.get('https://kaynnguyen.site/count', { maxRedirects: 0 });
        
        // Log the received data for debugging
        console.log('Received data:', response.data);

        // Update the count state with the incremented value from the response
        setCount(response.data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to handle button click
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Updated button to use the incrementCount function */}
        <button onClick={incrementCount}>Incrementttttt</button>
        {/* Display the count state */}
        <p>{count}</p>
      </header>
    </div>
  );
}

export default App;
