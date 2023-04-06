import React from 'react'
import './comp6.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import imag from "./static/avatar.png"


const Compo_6 = () => {
  return (
    <div className='compo_6A'  >
        <div className='compo_6B'> 
            <h4 style={{paddingLeft:"10px", paddingTop:"0vw"}} >Hotel</h4>
            <p style={{paddingLeft:"10px"}}>Dashboard</p>
            <p style={{paddingLeft:"10px"}}>Seen By</p>
           <div className='compo_5c'>
                <img className='image1' src={imag} alt="avatar" width={"50vw"}  height={"50vw"}></img>
                <img className='image2' src={imag} alt="avatar" width={"50vw"}  height={"50vw"}></img>
                <img className='image3' src={imag} alt="avatar" width={"50vw"}  height={"50vw"}></img>
               
               
            </div>

           <p><img className='image4' src={imag} alt="avatar" width={"50vw"}  height={"50vw"}></img></p>
            <Button variant="outlined" href="#outlined-buttons" style={{backgroundColor:"blue", color:"white" ,borderRadius:"20%", display:"inline-flex"}}>
        Tour
      </Button>
      
      <Button variant="outlined" href="#outlined-buttons" style={{backgroundColor:"black", color:"white" ,borderRadius:"20%", display:"inline-flex" ,paddingLeft:"2vw"}}>
       Trip
      </Button>

      <p><Button variant="contained" style={{backgroundColor:"black", color:"white" ,borderRadius:"20%"}}>Transport</Button></p>
                
       </div>
       
       
       

   
      
   
            
      

    </div>
  )
}

export default Compo_6