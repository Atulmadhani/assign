import React,{useState,useEffect} from 'react'

const Data = () => {
  const[data,setdata]=useState([]);

  const getdata =async()=>{
    const host = "http://localhost:5000";
    const response = await fetch(`${host}/data/get`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
       }
    }).then((response)=>{
      return response.json();
    }).then((data)=>{console.log(data)});
  }

  useEffect(()=>{
    getdata();

  },[])

  return (
    <div>
   <ul>
    {data.map(data=>(
      <li key={data.name}>{data.name}</li>,
      <li key={data.email}>{data.email}</li>,
      <li key={data.phoneno}>{data.phoneno}</li>
    ))}
   </ul>
    </div>
  )
}

export default Data
