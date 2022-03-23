import React, { useState } from 'react'
import AtmDrop from './AtmDrop';

const Showdata = (props) => {
  // const [dataa, setData] = useState("nanded");
//   const handleFoodChange = (event) => {
//     setData(event.target.value);
//   };
  return (
      <>
      <div> hi</div>
      {/* {props.dataatm.map(data => {console.log(data)})} */}
      {props.dataatm.map((data) => {
        return (
        <AtmDrop
    options={[
      { label:`ATM Name: ${data.atmName}` , value: 'Nanded' },
      { label: `Location: ${data.atmLocation}`, value: 'Nanded' },
      { label: `Available cash: ${data.AvailableCash}`, value: 'Nanded' },
      { label: `Transaction limit: ${data.transactionLimit}`, value: 'Nanded' },
      { label: `Accepted Cards: ${data.acceptedCards}`, value: 'Nanded' },
      { label: `Open: ${data.open}`, value: 'Nanded' },
    ]}
    // value={dataa}
   // onChange={handleFoodChange}
    />)

    })}
    </>
  )
}



export default Showdata;