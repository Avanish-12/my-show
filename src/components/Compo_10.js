import React from 'react'
import './comp10.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinearProgress from '@mui/material/LinearProgress';

const Compo_10 = () => {
  return (
    <div className='compo_10A'  >
    <div className='compo_10B'> 
        
    <h2 style={{color:"white" ,paddingLeft:"10px",  }} >Project Details          {<MoreVertIcon/>} </h2>
    <h1 style={{color:"red" ,paddingLeft:"10px"}} >Hira R.</h1>
        <p style={{paddingLeft:"10px"}}>UX/UI Designer</p>

        <h4 style={{color:"white" ,paddingLeft:"10px"}} >Projects  Progress  75%</h4>
        <p><LinearProgress/></p>
       
   </div>
   <div className="App">
  
</div>


  

        
  

</div>
  )
}

export default Compo_10