import * as React from 'react';



import CardContent from '@mui/material/CardContent';


import Style from "./index.module.css"


export default function Hero() {
  return (
    <>
    <div className={Style.middle}>
    <h1>Our Offered Services</h1>
    <p>Who are in extremely love with eco friendly system.</p>
</div>
 <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
 <CardContent className={Style.box}>
        <img src='https://preview.colorlib.com/theme/security/img/s1.jpg' alt=''/>
        <h3 style={{margin:"10px"}}>Basic& Common Repairs</h3>
        <p style={{width:"100%"}}>Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.</p>
     
 
      </CardContent>
      <CardContent className={Style.box}>
        <img src='https://preview.colorlib.com/theme/security/img/s2.jpg' alt=''/>
        <h3 style={{margin:"10px"}}>Brake Reapairs & Services</h3>
        <p style={{width:"100%"}}>Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.</p>
     
 
      </CardContent>
      <CardContent className={Style.box}>
        <img src='https://preview.colorlib.com/theme/security/img/s3.jpg' alt=''/>
  
        <h3 style={{margin:"10px"}}>Preventive Maintenance</h3>
        <p style={{width:"100%"}}>Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.</p>
 
      </CardContent>
  
 </div>
      
   
    </>
  );
}