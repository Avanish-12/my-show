import React from 'react'
import './comp4.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChartIcon from '@mui/icons-material/BarChart';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const Compo_4 = () => {
  return (
    <div className='compo_4A'  >
    <div className='compo_4B'> 
    
        <h1 style={{color:"white" ,paddingLeft:"3vw"}} > {<DashboardIcon/>} Dashboard  </h1>
        <p style={{paddingLeft:"3vw"}}>{<EmailIcon/>} Email</p>
        <p style={{paddingLeft:"3vw"}}> {<CalendarMonthIcon/>}  Calender</p>
        <p style={{paddingLeft:"3vw"}}> {<BarChartIcon/>} Graph</p>
        <p style={{paddingLeft:"3vw"}}> {<InsertDriveFileIcon/>}Forms</p>
       
   </div>
   


  

        
  

</div>
  )
}

export default Compo_4