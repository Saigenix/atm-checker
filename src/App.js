import './App.css';
import Navbar from './Navbar';
import React, {useState, useEffect} from 'react';
import Dropdown  from './Dropdown';
import AtmDrop from './AtmDrop';
function App() {
  const [city, setcity] = useState('Nanded');
  const [dataatm , setdata] = useState([]);
  const atmData = 'https://saigenix.github.io/atm-checker/data.json';
  const handleFoodChange = (event) => {
    setcity(event.target.value);
  };
  const getData= async () => {
    try {
      const responce = await fetch(atmData);
      const data = await responce.json();
      setdata(data);
      console.log(dataatm);
    } catch (error) {
      console.log(error);
    }
  };

 useEffect(() => {  getData(); }, []);

  return (
    <div className="App">
     <Navbar/>
     <div>
     <div className='locsearch'>
     <div className='Location'><p> Location: </p></div>
      <Dropdown
        
        options={[
          { label: 'Nanded', value: 'Nanded' },
          { label: 'Latur', value: 'Latur' },
          { label: 'Pune', value: 'Pune' },
          { label: 'London', value: 'London' },
          { label: 'Latkahi tri', value: 'Latdoish' },
          { label: 'Nagpur', value: 'Nagpur' },
          { label: 'Nashik', value: 'Nashik' },
          { label: 'Kolhapur', value: 'Kolhapur' },
        ]}
        value={city}
        onChange={handleFoodChange}
      />
      </div>

      <p>your city is {city}!</p>
      <AtmDrop
        options={[
          { label: dataatm[0].city, value: 'Nanded' },
        ]}
        value={dataatm[0].city}



      />
    
    </div>
    </div>
  );
  
}

export default App;
