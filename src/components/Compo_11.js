import React from 'react'
import './comp11.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import CircularProgress from '@mui/material/CircularProgress';
const Compo_11 = () => {
  return (
    <div className='compo_11A'  >
      <h2 style={{color:"white" ,paddingLeft:"0px"}} >Project Progress       {<MoreVertIcon/>} </h2>
    <div className='compo_11B'> 
        <h1 style={{paddingLeft:"2vw", paddingTop:"0vw"}}>75%    </h1>
    </div>
    <div className='compo_11C'>
      
      <CircularProgress style={{marginTop:"-150px"}} size={"8vw"} />
      <p>3 Remaining Projects</p>
    
    </div>
    

   
  

  

        
  

</div>
  )
}

export default Compo_11