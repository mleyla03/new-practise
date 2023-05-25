import * as React from 'react';



import CardContent from '@mui/material/CardContent';
import Style from "./index.module.css"
const Card = () => {
  return (
 <>
  <div className={Style.middle}>
    <h1>Some Features that Made us Unique</h1>
    <p>Who are in extremely love with eco friendly system.</p>
</div>
<div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}} >
<CardContent className={Style.box}>
       
    
        <h3 style={{margin:"10px"}}>Expert  Technicians</h3>
        <p style={{width:"100%"}}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
     
 
      </CardContent>
      <CardContent className={Style.box}>
       
    
       <h3 style={{margin:"10px"}}>Professional Service</h3>
       <p style={{width:"100%"}}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    

     </CardContent>
     <CardContent className={Style.box}>
       
    
       <h3 style={{margin:"10px"}}>Great Support</h3>
       <p style={{width:"100%"}}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    

     </CardContent>
     <CardContent className={Style.box}>
       
    
       <h3 style={{margin:"10px"}}>Technical Skills</h3>
       <p style={{width:"100%"}}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    

     </CardContent>
     <CardContent className={Style.box}>
       
    
       <h3 style={{margin:"10px"}}>Highly Recomended</h3>
       <p style={{width:"100%"}}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    

     </CardContent>
     <CardContent className={Style.box}>
       
    
       <h3 style={{margin:"10px"}}>Positive Reviews</h3>
       <p style={{width:"100%"}}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    

     </CardContent>
</div>
    
     
  
 </>
  )
}

export default Card