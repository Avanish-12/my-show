import React from 'react'
import './comp3.css';
import imag from "./static/leaf.png"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Compo_3 = () => {
  return (
    <div className='compo_3A'  >
        <div className='compo_3B'> 


            

   
    
        <h2 style={{color:"white" ,paddingLeft:"8vw"}} >   Dear Client         {<KeyboardArrowDownOutlinedIcon/>}</h2>
        <p style={{paddingLeft:"10vw"}}>Join our online community, It helps in managing your projects</p>

        <div className='compo_3C'>

<img className='image4' src={imag} alt="avatar" width={"100vw"}  height={"100vw"}></img> 
</div>
       
   </div>
   


  

        
  

</div>
  )
}

export default Compo_3