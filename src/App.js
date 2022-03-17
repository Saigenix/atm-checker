import './App.css';
import Navbar from './Navbar';
import React from 'react';
import Dropdown  from './Dropdown';
function App() {
  const [city, setcity] = React.useState('Nanded');

  const handleFoodChange = (event) => {
    setcity(event.target.value);
  };

  return (
    <div className="App">
     <Navbar/>
     <div>
     <div className='lo'></div>
     <div className='Location'></div>
      <Dropdown
        
        options={[
          { label: 'Nanded', value: 'Nanded' },
          { label: 'Latur', value: 'Latur' },
          { label: 'Pune', value: 'Pune' },
          { label: 'London', value: 'London' },
          { label: 'Latkahi tri', value: 'Latdoish' },
          { label: 'Pune', value: 'Pune' },
          { label: 'Pune', value: 'Pune' },
          { label: 'Pune', value: 'Pune' },
        ]}
        value={city}
        onChange={handleFoodChange}
      />

      <p>your city is {city}!</p>
    </div>
    </div>
  );
  
}

export default App;
