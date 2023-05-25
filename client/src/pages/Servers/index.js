import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import Style from "./index.module.css"
import { getAllSecurity } from '../../api/requests';

const Servers= () => {
    const [ state,setState]=useState([])
    useEffect(()=>{
        getAllSecurity().then((res)=>{
            setState(res)
        })
    },[])
  return (
    <>
    <div className={Style.middle}>
        <h1>Requirements to be Immigrants</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className={Style.ends} style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:"60px"}}>
        {state && state.map((news)=>{
          return <>
          <Card
    style={{
      width: 300,
    }}
  >
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={news.imageURL} alt=''/>
    </div>
    <span>{news.names}</span>
    <h3>{news.title}</h3>
    <p>{news.texts}</p>
    <div>
        <p>{news.like}</p>
        <p>{news.comment}</p>
    </div>
    
 
  </Card>
          </>
      
        } )}
    </div>
    </>
  )
}

export default Servers