import React from 'react'
import imag from "./static/leaf.png"
import './comp9.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function valuetext(value) {
  return `${value}°C`;
}





const Compo_9 = () => {
  return (
    <div className='compo_9A'  >
        <div className='compo_9B'> 
        <h2 style={{color:"white" ,paddingLeft:"2vw"}} >   Free Slots Available</h2>
        <div className='compo_9C'>
        <Box width={50}>
        <Slider
  aria-label="Small steps"

  defaultValue={0.00000005}
  getAriaValueText={valuetext}
  step={0.00000001}
  marks
  min={-0.00000005}
  max={0.0000001}
  valueLabelDisplay="auto"
/>
</Box>
    </div>
        <div className='compo_9D'>
       
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Item style={{backgroundColor:"orange" , color:"white",borderRadius:"15%",height:"7vw"}}>
          <h1>12</h1>
            <p>June</p>
    
    </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{backgroundColor:"black" , color:"white",borderRadius:"15%",height:"7vw"}}>
            <h1>18</h1>
            <p>June</p>
          
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{backgroundColor:"black" , color:"white",borderRadius:"15%",height:"7vw"}}><h1>20</h1>
            <p>June</p></Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{backgroundColor:"black" , color:"white",borderRadius:"15%",height:"7vw"}}><h1>02</h1>
            <p>July</p></Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{backgroundColor:"black" , color:"white",borderRadius:"15%",height:"7vw"}}><h1>10</h1>
            <p>July</p></Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{backgroundColor:"black" , color:"white",borderRadius:"15%",height:"7vw"}}><h1>15</h1>
            <p>July</p></Item>
        </Grid>
      </Grid>
    </Box>
      
   
        </div>
        
        
       
   </div>
  </div>
  )
}

export default Compo_9