import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [city, setCity] = useState("")
  const [error , setError] = useState("")
  const [data , setData] = useState('')
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5c80615c8615719d5ddbff30ea0ea4d0`

  async function handleSearch(){
    try{
      const res = await axios.get(URL)
      setData(res?.data)
    }
     catch(e){
      setError("Enter Valid City Name")
     }
  }
  
 
  return (
    <div className='cont' >
      <h1>Weather App</h1>
      <input type="text" id="city"
       value={city}
       onChange={(e)=>setCity(e.target.value)} 
       placeholder="Enter City Name"/>
       <button onClick={handleSearch}>Search</button>
       {data?
       <div>
        <h3>Weather details of city : {data?.name}</h3>
        <h3>Current Temperature : {data?.main?.temp}</h3>
        <h3>Temperature range : {data?.main?.temp_min} to {data?.main?.temp_max}</h3>
        <h3>Humidity : {data?.main?.humidity}</h3>
       </div>
        :
        <div className='error'>
        {error}
        </div>}
    </div>
  )
}

export default App
