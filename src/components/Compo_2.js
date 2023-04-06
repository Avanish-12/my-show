import React from 'react'
import './comp2.css';
import imag from "./static/dollar.png"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LinearProgress from '@mui/material/LinearProgress';





function Compo_2() {
  return (
    
    <div className='compo_2A'  >
      
       <h2 style={{color:"white" ,paddingLeft:"8vw"}} >   Total Revenue</h2>
        <p style={{paddingLeft:"8vw"}}>$ 92,983   <p><LinearProgress/></p></p>
        
    <div className='compo_2B'>
    
   <img className='image4' src={imag} alt="avatar" width={"80vw"}  height={"80vw"}></img> 

       
   </div>

   
      
   


  

        
  

</div>
  )
}

export default Compo_2