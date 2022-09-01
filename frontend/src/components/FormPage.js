import React,{useState,useEffect} from 'react'
import axios from 'axios'


export default function FormPage() {
    const[product,setProduct]=useState([])
const [name,setName]=useState('')
const [age,setAge]=useState('')
async function handleSubmit(){
    let result = await axios.post('http://localhost:5000/routes/add_user',{
        name:name,
        age:age
    }).catch( (error)=> {
            console.log(error);
    })
    if(result){
        console.log(result.data);
    }
}
async function fetchData(){
    let result=await axios.get('http://localhost:5000/routes/users')
    setProduct([...result.data.records])
    
}
useEffect(()=>{
    async function res(){
        await fetchData();
    }
   res() 
},[])
  return (
    <div>
        <h1>Form page</h1>
        <h3>Name</h3>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <h3>Age</h3>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tbody>
        {product.length !== 0 ? (
                        product.map((ele, idx) => {
                          return (
                            <tr key={idx}>
                              <td>{ele.name}</td>
                              <td>{ele.age}</td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td>NO data</td>
                        </tr>
                      )}
                      </tbody>
                      </table>
    </div>
  )
}
