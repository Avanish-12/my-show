import React from 'react'
import imag from "./static/girl1.png"
import './comp7.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import image1 from "./static/arrow.png"
import image2 from "./static/girl3.png"

import image3 from "./static/girl5.png"

import image4 from "./static/girl3.png"
import image5 from "./static/girl5.png"


const Compo_7 = () => {
  return (
    <div className='compo_7A'  >
        <div className='compo_7B'> 
        <h2 style={{color:"white" ,paddingLeft:"4vw"}} > Transaction Detail</h2>
        <p style={{paddingLeft:"4vw"}}>Hi Hira</p>
        <p style={{paddingLeft:"4vw"}}>$ 4,763,40</p>
        <p style={{paddingLeft:"4vw"}}>Available Balance</p>
        <div className='compo_7C'>
<img className='image4' src={imag} alt="avatar" width={"80vw"}  height={"80vw"}></img> 
<p>  ''''3863</p>
<div className='compo_7D'>
<Button variant="outlined" href="#outlined-buttons" style={{backgroundColor:"orange", color:"white" ,borderRadius:"20%", display:"inline-flex"}}>
        Send
      </Button>
</div>
</div>
<div className='compo_7E'>

  <img className='image4' src={image1} alt="avatar" width={"50vw"}  height={"70vw"}></img>
  <img className='image4' src={image2} alt="avatar" width={"80vw"}  height={"80vw"}></img> 
  <img className='image4' src={image3} alt="avatar" width={"80vw"}  height={"80vw"}></img> 
  <img className='image4' src={image4} alt="avatar" width={"80vw"}  height={"80vw"}></img> 
  <img className='image4' src={image5} alt="avatar" width={"80vw"}  height={"80vw"}></img> 
</div>

       
   </div>
   
  </div>
  )
}

export default Compo_7