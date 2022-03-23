import './App.css';
import Navbar from './Navbar';
import React, {useState, useEffect} from 'react';
import Dropdown  from './Dropdown';

import Showdata from './Showdata';
function App() {
  const [dataatm , setdata] = useState([]);
  const [arry , setarray] = useState([]);
  const [city, setcity] = useState('Nanded');
  const [loding, setloding] = useState(false);
  const atmData = 'https://saigenix.github.io/atm-checker/data.json';
  const handleFoodChange = (event) => {
    setcity(event.target.value);
    const result = dataatm.filter(data => data.city === event.target.value);
    setarray(result);
    console.log(result);
  };
  
  const getData= async () => {
    try {
      const responce = await fetch(atmData);
      const data = await responce.json();
      // console.log(data);
      setdata(data);
      setarray(data);
      setloding(true);
    } catch (error) {
      console.log(error);
      setloding(false);
    }
  };

  useEffect(() => {
    getData();
    }, []);
  
  useEffect(() => {
    // console.log(dataatm);
    
    // action on update of movies
}, [dataatm]);


  return (
    <div className="App">
     <Navbar/>
     <div>
    <img src={require('./assets/Vector.png')} className='rupee' alt='LOGO'/>
     <div className='Cash' > Cash</div>
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
          { label: 'Mumbai', value: 'Mumbai' },
        ]}
        value={city}
        onChange={handleFoodChange}
      />
      </div>
     <p className='txt'>Showing ATMs Available In {city}! . . .</p>
     
      {loding ? ( 
        <Showdata dataatm={arry}/> )
        : (
        <span>loading .....</span>
      )}
      
    </div>
    </div>
  );
  
}



export default App;
